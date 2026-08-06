"""Download official Urovo product images, compress to WebP, remove legacy PNG/JPG."""
from __future__ import annotations

import json
import re
import subprocess
import sys
import urllib.request
from io import BytesIO
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "products"
MAP_FILE = ROOT / "scripts" / "official_image_urls.json"

UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)
HEADERS = {"User-Agent": UA, "Referer": "https://www.urovo.com/"}

# 已验证的官网大图（优先 /image/ 画廊、产品详情页主图）
OFFICIAL_SOURCES: dict[str, str] = {
    "dt630": "https://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2026-03-27/69c6446ee8efd.png",
    "dt66": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2024-06-13/666aa37e1b6b6.jpg",
    "dt50": "https://enoss.urovo.com/images/dt50/DT50_04.jpg",
    "dt50-5g": "https://enoss.urovo.com/product/dt50/images/DT505Gxn-m.jpg",
    "dt50-dp": "https://enoss.urovo.com/images/dt50/DT50_04.jpg",
    "dt50-ex": "https://enoss.urovo.com/images/dt50/DT50_04.jpg",
    "dt50-5g-harmony": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2024-06-25/667a6a0b87c2a.png",
    "dt50b": "https://enoss.urovo.com/images/dt50/DT50_04.jpg",
    "rt30": "https://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2025-09-08/68be71a4a2f06.jpg",
    "dt40": "https://enoss.urovo.com/images/dt40/DT40_04.jpg",
    "rt40s": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2024-06-28/667e6fc453b88.jpg",
    "ct48": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2023-08-21/64e33b4bbc6b2.jpg",
    "ct58": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2023-05-27/6471ad1c785ed.jpg",
    "dt510": "https://enoss.urovo.com/product/dt50/images/p1_pc.jpg",
    "p8100p": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2024-06-28/667e54d4b350e.png",
    "p8100": "https://enoss.urovo.com/newproduct/mimages/p8100/P8100_02.png",
    "u2s": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2025-03-05/67c7b0af46372.jpg",
    "sr5600": "https://enoss.urovo.com/product/SR5600/images/s1.png",
    "dt50u": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2025-02-19/67b58d7d11583.jpg",
    "dt50u-lite": "https://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2025-02-19/67b53cc56fd9e.png",
    "dt50d": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2025-02-19/67b58d7d11583.jpg",
    "rfg91": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2026-04-17/69e203924b41a.jpg",
    "fr1000": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2025-02-21/67b81e31dbb2e.jpg",
    "fr2000": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2025-02-21/67b850b2ee31d.png",
    "fr7000": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2025-02-21/67b83ae0e0a3d.png",
    "d81r": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2024-01-12/65a0b34d6237e.png",
    "k329": "https://enoss.urovo.com/product/k329/images/p2.jpg",
    "k419": "https://enoss.urovo.com/newproduct/mimages/k419/k419_01.jpg",
    "d7100": "https://www.urovo.com/Public/Mobile/images/img116.png",
    "d8100-plus": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2024-06-18/66712bfd0c24c.jpg",
    "k388-pro": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2026-05-27/6a16b69ae3e2c.png",
    "i9000s": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2024-09-14/66e4e6780adf3.png",
    "i9200": "https://en-urovo.oss-ap-southeast-1.aliyuncs.com/Product%20Documents/POS/i9200%E9%9D%9E%E9%87%91/%E5%AE%98%E7%BD%91.png",
    "q200": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/newproduct/pimages/q200/Q200_01.png",
    "k200": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2023-10-09/6523add71e8ed.jpg",
    "k220": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2024-08-14/66bc12a54ab1b.jpg",
    "s716": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/image/2023-01-09/63bb6da03e57a.jpg",
    "s710": "https://youboxunguanwang.oss-cn-shenzhen.aliyuncs.com/newproduct/pimages/s710/S710_01.png",
}

# 官网暂无独立产品页，从 git 中的 PPT 原图压缩（仅作兜底）
GIT_PPT_FALLBACK = {"d9100", "q1500"}

PRODUCT_PAGES_CN: dict[str, str] = {
    "dt66": "/products/mobile/DT66.html",
    "dt50": "/products/mobile/DT50.html",
    "dt50-5g": "/products/mobile/dt505g.html",
    "dt50-5g-harmony": "/products/mobile/DT505GOpenHarmony.html",
    "rt40s": "/products/mobile/rt40s.html",
    "ct48": "/products/mobile/CT48C.html",
    "ct58": "/products/mobile/CT58.html",
    "p8100p": "/products/tablets/P8100P.html",
    "u2s": "/products/Wearable/U2S.html",
    "dt50u": "/products/rfid/DT50U.html",
    "dt50u-lite": "/products/rfid/DT50PLite.html",
    "rfg91": "/products/rfid/RFG91.html",
    "fr1000": "/products/rfid/FR1000.html",
    "fr2000": "/products/rfid/FR2000.html",
    "fr7000": "/products/rfid/FR7000.html",
    "d81r": "/products/rfid/D81R%E7%B3%BB%E5%88%97.html",
    "k329": "/products/printer/k329.html",
    "k419": "/products/printer/K419.html",
    "d7100": "/products/printer/d7100.html",
    "d8100-plus": "/products/printer/d8100plus.html",
    "k388-pro": "/products/printer/K388Pro.html",
    "i9000s": "/products/payment/i9000s1.html",
    "q200": "/products/scanner/Q200.html",
    "k200": "/products/scanner/K200.html",
    "k220": "/products/scanner/K220.html",
    "s716": "/products/scanner/S716.html",
    "s710": "/products/scanner/S710.html",
}

PRODUCT_PAGES_EN: dict[str, str] = {
    "dt630": "/products/handheld-mobile-computer/DT630.html",
    "dt50": "/products/handheld-mobile-computer/DT50.html",
    "dt50-5g": "/products/handheld-mobile-computer/DT505G.html",
    "dt40": "/products/handheld-mobile-computer/DT40.html",
    "rt30": "/products/mobile/RT30.html",
    "dt510": "/products/handheld-mobile-computer/DT510.html",
    "p8100": "/products/rugged-tablets/P8100.html",
    "dt50u-lite": "/products/Handheld-RFID-Reader/DT50PLite.html",
    "k329": "/products/printer/K329.html",
    "k419": "/products/printer/K419.html",
    "sr5600": "/products/wearable-computer/SR5600.html",
}


def fetch(url: str) -> bytes:
    url = url.replace("http://", "https://")
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = resp.read()
    if len(data) < 8000:
        raise ValueError(f"image too small ({len(data)} bytes): {url}")
    return data


def fetch_git_png(product_id: str) -> bytes:
    result = subprocess.run(
        ["git", "show", f"HEAD:public/products/{product_id}.png"],
        cwd=ROOT,
        capture_output=True,
        check=False,
    )
    if result.returncode != 0 or len(result.stdout) < 8000:
        raise ValueError(f"no git png fallback for {product_id}")
    return result.stdout


def gallery_image(page_url: str) -> str | None:
    req = urllib.request.Request(page_url, headers=HEADERS)
    html = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "ignore")
    if len(html) < 50000:
        return None
    imgs = re.findall(
        r"https?://[^\"']+/image/[^\"']+\.(?:jpg|jpeg|png|webp)",
        html,
        re.I,
    )
    for u in imgs:
        u = u.split("?")[0].replace("http://", "https://")
        if "logo" not in u.lower():
            return u
    return None


def resolve_source(product_id: str) -> tuple[str, str]:
    if product_id in GIT_PPT_FALLBACK:
        return "git-ppt", f"HEAD:public/products/{product_id}.png"

    if product_id in OFFICIAL_SOURCES:
        return "manual", OFFICIAL_SOURCES[product_id]

    for base, pages in [
        ("https://www.urovo.com", PRODUCT_PAGES_CN),
        ("https://en.urovo.com", PRODUCT_PAGES_EN),
    ]:
        path = pages.get(product_id)
        if not path:
            continue
        try:
            g = gallery_image(base + path)
            if g:
                return "gallery", g
        except Exception:
            pass

    raise ValueError(f"no official source for {product_id}")


def save_webp(data: bytes, dest: Path, max_width: int, quality: int) -> None:
    from PIL import Image

    img = Image.open(BytesIO(data))
    if img.width < 120 or img.height < 120:
        raise ValueError(f"image too small: {img.size}")
    if img.mode in ("RGBA", "P"):
        bg = Image.new("RGBA", img.size, (245, 247, 250, 255))
        rgba = img.convert("RGBA")
        bg.paste(rgba, mask=rgba.split()[-1])
        img = bg.convert("RGB")
    else:
        img = img.convert("RGB")
    w, h = img.size
    if w > max_width:
        img = img.resize((max_width, int(h * max_width / w)), Image.Resampling.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, "WEBP", quality=quality, method=6)


def main():
    try:
        from PIL import Image  # noqa: F401
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow", "-q"])

    all_ids = sorted(set(OFFICIAL_SOURCES) | GIT_PPT_FALLBACK)
    results: dict = {}

    for pid in all_ids:
        print(f"[{pid}]")
        try:
            kind, source = resolve_source(pid)
            raw = fetch_git_png(pid) if kind == "git-ppt" else fetch(source)
            thumb_path = OUT / f"{pid}.webp"
            detail_path = OUT / f"{pid}-detail.webp"
            save_webp(raw, thumb_path, max_width=360, quality=78)
            save_webp(raw, detail_path, max_width=720, quality=82)
            results[pid] = {
                "source_kind": kind,
                "source": source,
                "thumb_kb": round(thumb_path.stat().st_size / 1024, 1),
                "detail_kb": round(detail_path.stat().st_size / 1024, 1),
            }
            print(
                f"  ok {kind} thumb={results[pid]['thumb_kb']}KB "
                f"detail={results[pid]['detail_kb']}KB"
            )
        except Exception as e:
            print(f"  FAILED: {e}")
            results[pid] = {"error": str(e)}

    removed = 0
    if OUT.exists():
        for f in OUT.iterdir():
            if f.suffix.lower() in (".png", ".jpg", ".jpeg", ".svg") and f.is_file():
                f.unlink()
                removed += 1
    print(f"removed {removed} legacy image files")

    MAP_FILE.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    ok = [p for p in results if "error" not in results[p]]
    total_kb = sum(results[p]["thumb_kb"] + results[p]["detail_kb"] for p in ok)
    print(f"\nDone {len(ok)}/{len(all_ids)} products, total WebP ~{total_kb:.0f}KB")


if __name__ == "__main__":
    main()
