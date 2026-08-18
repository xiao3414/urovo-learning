#!/usr/bin/env python3
"""Export panorama HTML to a single long-page PDF matching on-screen layout."""

from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML = ROOT / "docs" / "outputs" / "dt630-business-panorama" / "index.html"
PDF = ROOT / "docs" / "outputs" / "dt630-business-panorama" / "优博讯业务全景认知图-DT630产研销全流程.pdf"
PDF_EN = ROOT / "docs" / "outputs" / "dt630-business-panorama" / "urovo-dt630-business-panorama.pdf"

VIEWPORT_WIDTH = 720


def launch_browser(playwright):
    for channel in ("chrome", "msedge", None):
        try:
            if channel:
                return playwright.chromium.launch(channel=channel)
            return playwright.chromium.launch()
        except Exception:
            continue
    raise RuntimeError("No Chromium browser available for Playwright")


def export_screenshot_pdf() -> None:
    """Full-page screenshot → single PDF page (WYSIWYG, no browser headers)."""
    from PIL import Image
    from playwright.sync_api import sync_playwright

    png = PDF.with_suffix(".export.png")
    file_url = HTML.resolve().as_uri()

    with sync_playwright() as p:
        browser = launch_browser(p)
        page = browser.new_page(viewport={"width": VIEWPORT_WIDTH, "height": 900})
        page.goto(file_url, wait_until="networkidle")
        page.wait_for_timeout(1000)
        page.screenshot(path=str(png), full_page=True)
        browser.close()

    img = Image.open(png).convert("RGB")
    img.save(PDF, "PDF", resolution=150.0)
    png.unlink(missing_ok=True)


def export_playwright_pdf() -> None:
    """Single custom-size PDF via Playwright (no header/footer)."""
    from playwright.sync_api import sync_playwright

    file_url = HTML.resolve().as_uri()
    with sync_playwright() as p:
        browser = launch_browser(p)
        page = browser.new_page(viewport={"width": VIEWPORT_WIDTH, "height": 900})
        page.goto(file_url, wait_until="networkidle")
        page.wait_for_timeout(1000)
        height = page.evaluate(
            "() => Math.ceil((document.querySelector('.doc') || document.body).scrollHeight)"
        )
        page.pdf(
            path=str(PDF),
            width=f"{VIEWPORT_WIDTH}px",
            height=f"{height}px",
            print_background=True,
            margin={"top": "0", "right": "0", "bottom": "0", "left": "0"},
            prefer_css_page_size=False,
            display_header_footer=False,
        )
        browser.close()


def main() -> int:
    if not HTML.exists():
        print(f"Missing HTML: {HTML}", file=sys.stderr)
        return 1

    PDF.parent.mkdir(parents=True, exist_ok=True)
    errors: list[str] = []

    for fn in (export_screenshot_pdf, export_playwright_pdf):
        try:
            fn()
            break
        except Exception as exc:
            errors.append(f"{fn.__name__}: {exc}")
    else:
        print("Export failed:", file=sys.stderr)
        for line in errors:
            print(f"  - {line}", file=sys.stderr)
        return 1

    PDF_EN.write_bytes(PDF.read_bytes())
    size_kb = PDF.stat().st_size // 1024
    print(f"PDF saved: {PDF} ({size_kb} KB)")
    print(f"Copy:      {PDF_EN}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
