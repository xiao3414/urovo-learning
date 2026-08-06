"""从优博讯官网下载产品图，压缩为 WebP 写入 public/products/。"""
from __future__ import annotations

import json
import subprocess
import sys
import urllib.request
from io import BytesIO
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "products"
MAP_FILE = ROOT / "scripts" / "official_image_urls.json"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0",
    "Referer": "https://www.urovo.com/",
}

# 官网大图 URL（youboxunguanwang / enoss / en-urovo CDN）
SOURCES: dict[str, str] = {
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

# 官网无产品页，从 git 历史 PPT 原图压缩
GIT_FALLBACK = {"d9100", "q1500"}


def download(url: str) -> bytes:
    url = url.replace("http://", "https://")
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = resp.read()
    if len(data) < 8000:
        raise ValueError(f"too small ({len(data)} B): {url}")
    return data


def download_git_png(product_id: str) -> bytes:
    r = subprocess.run(
        ["git", "show", f"HEAD:public/products/{product_id}.png"],
        cwd=ROOT,
        capture_output=True,
        check=False,
    )
    if r.returncode != 0 or len(r.stdout) < 8000:
        raise ValueError(f"no git png for {product_id}")
    return r.stdout


def to_webp(data: bytes, dest: Path, max_width: int, quality: int) -> None:
    from PIL import Image

    img = Image.open(BytesIO(data))
    if img.width < 120 or img.height < 120:
        raise ValueError(f"too small: {img.size}")
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


def main() -> None:
    try:
        from PIL import Image  # noqa: F401
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow", "-q"])

    results: dict = {}
    ids = sorted(set(SOURCES) | GIT_FALLBACK)

    for pid in ids:
        print(pid, end=" ")
        try:
            if pid in GIT_FALLBACK:
                raw = download_git_png(pid)
                source = f"git:public/products/{pid}.png"
            else:
                source = SOURCES[pid]
                raw = download(source)
            thumb = OUT / f"{pid}.webp"
            detail = OUT / f"{pid}-detail.webp"
            to_webp(raw, thumb, 360, 78)
            to_webp(raw, detail, 720, 82)
            results[pid] = {
                "source": source,
                "thumb_kb": round(thumb.stat().st_size / 1024, 1),
                "detail_kb": round(detail.stat().st_size / 1024, 1),
            }
            print(f"OK {results[pid]['thumb_kb']}+{results[pid]['detail_kb']} KB")
        except Exception as e:
            print(f"FAIL {e}")
            results[pid] = {"error": str(e)}

    for f in OUT.glob("*"):
        if f.suffix.lower() in {".png", ".jpg", ".jpeg", ".svg"}:
            f.unlink()

    MAP_FILE.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    ok = sum(1 for v in results.values() if "error" not in v)
    print(f"\n{ok}/{len(ids)} done")


if __name__ == "__main__":
    main()
