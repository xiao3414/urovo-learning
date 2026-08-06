"""Parse all products from extracted PPTX slides."""
import json
import re
from pathlib import Path

slides = json.loads(
    (Path(__file__).parent / "pptx_extract" / "slides.json").read_text(encoding="utf-8")
)

# Product model patterns
MODEL_RE = re.compile(
    r"\b("
    r"DT\d+[A-Za-z\s\-（）()]*|"
    r"RT\d+[A-Za-z\s]*|"
    r"CT\d+|"
    r"P8100[A-Za-z\s]*|"
    r"U2S|"
    r"SR5600|"
    r"DT50U[\s\w]*|"
    r"RFG91|"
    r"FR2000|"
    r"RFID[\w\s]*|"
    r"i9000S|i9200|Q1500|Q200|"
    r"K200|K220|S716|S710|"
    r"MK388[\s\w]*|"
    r"K329|K388|"
    r")\b",
    re.I,
)

SECTION_MARKERS = [
    "PDA产品线",
    "RFID产品线",
    "智能移动支付终端",
    "扫描枪产品线",
    "打印机产品线",
    "支持产品：",
]

SKIP = {"产品视频", "配件一览", "产品配件", "规格参数", "应用场", "扫码枪", "扫码枪产品"}


def is_product_slide(text):
    if not text or len(text) < 20:
        return False
    for s in SKIP:
        if s in text and "规格参数" not in text:
            return False
    # intro slides with model name
    if re.search(r"(企业级|工业级|智能|手持|终端|扫描|POS|RFID|平板|穿戴)", text):
        if re.search(r"(DT|RT|CT|P8100|U2S|SR5600|DT50U|RFG91|FR2000|i9000|i9200|Q1500|Q200|K200|K220|S716|S710|MK388)", text, re.I):
            return True
    return False


def extract_model(text):
    # Try explicit patterns first
    patterns = [
        r"(DT66)\s",
        r"(DT630)\s",
        r"(DT50\s5G\s*（开源鸿蒙版）|DT50\s5G（开源鸿蒙版）|DT50 5G（开源鸿蒙版）)",
        r"(DT50\s5G|DT50 5G)",
        r"(DT50\sDP|DT50 DP)",
        r"(DT50\sEx|DT50 Ex|DT50系列 防爆)",
        r"(DT50B)",
        r"(DT50)\s",
        r"(DT510)",
        r"(DT40)",
        r"(RT40S)",
        r"(RT30)",
        r"(CT48)",
        r"(CT58)",
        r"(P8100P)",
        r"(P8100)",
        r"(U2S)",
        r"(SR5600)",
        r"(DT50U\sLite|DT50U Lite)",
        r"(DT50U)",
        r"(RFG91)",
        r"(FR2000)",
        r"(i9000S)",
        r"(i9200)",
        r"(Q1500)",
        r"(Q200)",
        r"(K200)",
        r"(K220)",
        r"(S716)",
        r"(S710)",
        r"(MK388\sPro|MK388 Pro)",
    ]
    for p in patterns:
        m = re.search(p, text, re.I)
        if m:
            return m.group(1).strip()
    return None


products = []
current_section = ""
seen = set()

for s in slides:
    text = s["text"]
    for marker in SECTION_MARKERS:
        if marker in text:
            current_section = marker

    if "规格参数" in text:
        model = extract_model(text)
        if model:
            key = model.lower().replace(" ", "-")
            if key not in seen:
                seen.add(key)
                products.append(
                    {
                        "model": model,
                        "section": current_section,
                        "slide": s["slide"],
                        "type": "specs",
                        "text_preview": text[:300],
                    }
                )
    elif is_product_slide(text):
        model = extract_model(text)
        if model:
            key = model.lower().replace(" ", "-")
            if key not in seen:
                seen.add(key)
                products.append(
                    {
                        "model": model,
                        "section": current_section,
                        "slide": s["slide"],
                        "type": "intro",
                        "text_preview": text[:300],
                    }
                )

out = Path(__file__).parent / "pptx_extract" / "products_list.json"
out.write_text(json.dumps(products, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Found {len(products)} products:")
for p in products:
    print(f"  {p['model']:25} slide {p['slide']:3} [{p['section']}]")
