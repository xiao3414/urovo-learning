"""将 products.js 中的图片路径改为 WebP。"""
import re
from pathlib import Path

path = Path(__file__).resolve().parent.parent / "src" / "data" / "products.js"
text = path.read_text(encoding="utf-8")
text = re.sub(
    r"imageDetail: `\$\{import\.meta\.env\.BASE_URL\}products/[^`]+`,\n\s*",
    "",
    text,
)
text = re.sub(
    r"image: `\$\{import\.meta\.env\.BASE_URL\}products/([^`]+)\.(?:png|webp)`",
    r"image: `${import.meta.env.BASE_URL}products/\1.webp`,\n"
    r"    imageDetail: `${import.meta.env.BASE_URL}products/\1-detail.webp`",
    text,
)
path.write_text(text, encoding="utf-8")
