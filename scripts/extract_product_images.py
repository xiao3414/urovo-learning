"""Extract product hero images from PPTX slides and save to public/products/."""
import json
import re
import shutil
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PPTX = Path(
    r"c:\Users\urovo\Documents\WXWork\1688854310865517\Cache\File\2026-08"
    r"\优博讯全系列产品介绍——中文20260131 (1).pptx"
)
OUT = ROOT / "public" / "products"
OUT.mkdir(parents=True, exist_ok=True)

# slide -> product id mapping (intro slides with product photos)
SLIDE_PRODUCT = {
    8: "dt630",
    14: "dt66",
    19: "dt50",
    23: "dt50-5g",
    25: "dt50-dp",
    27: "dt50-ex",
    30: "dt50-5g-harmony",
    32: "dt50b",
    33: "rt30",
    36: "dt40",
    39: "rt40s",
    42: "ct48",
    47: "ct58",
    51: "dt510",
    54: "p8100p",
    58: "p8100",
    59: "u2s",
    61: "sr5600",
    64: "rfg91",
    67: "dt50u-lite",
    69: "fr1000",
    71: "fr2000",
    74: "fr7000",
    77: "dt50u",
    79: "dt50d",
    81: "d81r",
    87: "k329",
    90: "k419",
    92: "d7100",
    94: "d8100-plus",
    96: "d9100",
    99: "k388-pro",
    102: "i9000s",
    105: "i9200",
    107: "q1500",
    109: "q200",
    112: "k200",
    115: "k220",
    116: "s716",
    118: "s710",
}

REL_NS = {
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
}
PKG_NS = {"rel": "http://schemas.openxmlformats.org/package/2006/relationships"}


def get_slide_rels(z, slide_num):
    rel_path = f"ppt/slides/_rels/slide{slide_num}.xml.rels"
    if rel_path not in z.namelist():
        return {}
    root = ET.fromstring(z.read(rel_path))
    rels = {}
    for rel in root.findall("rel:Relationship", PKG_NS):
        rels[rel.get("Id")] = rel.get("Target")
    return rels


def get_slide_images(z, slide_num):
    slide_path = f"ppt/slides/slide{slide_num}.xml"
    if slide_path not in z.namelist():
        return []
    root = ET.fromstring(z.read(slide_path))
    rels = get_slide_rels(z, slide_num)
    images = []
    for blip in root.iter("{http://schemas.openxmlformats.org/drawingml/2006/main}blip"):
        embed = blip.get("{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed")
        if embed and embed in rels:
            target = rels[embed]
            if target.startswith("../"):
                target = "ppt/" + target[3:]
            elif not target.startswith("ppt/"):
                target = "ppt/slides/" + target
            images.append(target)
    return images


def pick_best_image(z, images):
    """Pick largest image file (likely product photo)."""
    best = None
    best_size = 0
    for img in images:
        if img not in z.namelist():
            continue
        info = z.getinfo(img)
        # skip tiny icons (< 10KB)
        if info.file_size < 10000:
            continue
        ext = Path(img).suffix.lower()
        if ext not in (".png", ".jpg", ".jpeg", ".webp", ".gif"):
            continue
        if info.file_size > best_size:
            best_size = info.file_size
            best = img
    return best


def main():
    results = {}
    with zipfile.ZipFile(PPTX) as z:
        for slide_num, pid in SLIDE_PRODUCT.items():
            images = get_slide_images(z, slide_num)
            best = pick_best_image(z, images)
            if not best:
                # try spec slide nearby
                for offset in [1, 2, -1]:
                    alt = slide_num + offset
                    images = get_slide_images(z, alt)
                    best = pick_best_image(z, images)
                    if best:
                        break
            if best:
                ext = Path(best).suffix.lower()
                if ext == ".jpeg":
                    ext = ".jpg"
                dest = OUT / f"{pid}{ext}"
                with z.open(best) as src, open(dest, "wb") as dst:
                    shutil.copyfileobj(src, dst)
                results[pid] = str(dest.name)
                print(f"OK {pid} <- slide {slide_num} ({best}, {dest.stat().st_size} bytes)")
            else:
                print(f"MISS {pid} slide {slide_num} (no suitable image)")

    (ROOT / "scripts" / "pptx_extract" / "image_map.json").write_text(
        json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8"
    )


if __name__ == "__main__":
    main()
