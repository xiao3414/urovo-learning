"""Extract product info and images from Urovo PPTX."""
import json
import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

PPTX = Path(
    r"c:\Users\urovo\Documents\WXWork\1688854310865517\Cache\File\2026-08"
    r"\优博讯全系列产品介绍——中文20260131 (1).pptx"
)
OUT = Path(__file__).resolve().parent.parent / "scripts" / "pptx_extract"
OUT.mkdir(parents=True, exist_ok=True)

NS = {"a": "http://schemas.openxmlformats.org/drawingml/2006/main"}


def slide_text(root):
    parts = []
    for t in root.iter("{http://schemas.openxmlformats.org/drawingml/2006/main}t"):
        if t.text:
            parts.append(t.text)
        if t.tail:
            parts.append(t.tail)
    return "".join(parts).strip()


def main():
    slides_data = []
    with zipfile.ZipFile(PPTX) as z:
        slide_files = sorted(
            [n for n in z.namelist() if re.match(r"ppt/slides/slide\d+\.xml$", n)],
            key=lambda x: int(re.search(r"slide(\d+)", x).group(1)),
        )
        media = [n for n in z.namelist() if n.startswith("ppt/media/")]
        for m in media:
            z.extract(m, OUT / "media")

        for sf in slide_files:
            num = int(re.search(r"slide(\d+)", sf).group(1))
            root = ET.fromstring(z.read(sf))
            text = slide_text(root)
            slides_data.append({"slide": num, "text": text})

    (OUT / "slides.json").write_text(
        json.dumps(slides_data, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"Extracted {len(slides_data)} slides, {len(media)} media files -> {OUT}")


if __name__ == "__main__":
    main()
