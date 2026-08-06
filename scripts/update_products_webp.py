"""Update products.js to use WebP thumbnails and detail images."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PRODUCTS = ROOT / "src" / "data" / "products.js"

text = PRODUCTS.read_text(encoding="utf-8")

if "imageDetail:" in text:
    text = re.sub(
        r"imageDetail: `\$\{import\.meta\.env\.BASE_URL\}products/[^`]+`,\n\s*",
        "",
        text,
    )

text = re.sub(
    r"image: `\$\{import\.meta\.env\.BASE_URL\}products/([^`]+)\.png`",
    r"image: `${import.meta.env.BASE_URL}products/\1.webp`,\n"
    r"    imageDetail: `${import.meta.env.BASE_URL}products/\1-detail.webp`",
    text,
)

PRODUCTS.write_text(text, encoding="utf-8")
print("Updated", PRODUCTS)
