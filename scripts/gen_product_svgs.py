"""生成产品占位 SVG 图（public/products/）"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / 'public' / 'products'
ROOT.mkdir(parents=True, exist_ok=True)

PRODUCTS = {
    'dt66': ('DT66', '#0052d9', 'pda'),
    'dt630': ('DT630', '#0052d9', 'pda'),
    'dt50': ('DT50', '#0052d9', 'pda'),
    'rt40s': ('RT40S', '#003a8c', 'pda'),
    'rt30': ('RT30', '#1677ff', 'pda'),
    'dt510': ('DT510', '#4096ff', 'pda'),
    'dt50u': ('DT50U', '#722ed1', 'rfid'),
    'dt50u-lite': ('DT50U Lite', '#9254de', 'rfid'),
    'rfg91': ('RFG91', '#531dab', 'rfid'),
    'fr2000': ('FR2000', '#722ed1', 'rfid'),
    'i9000s': ('i9000S', '#08979c', 'pos'),
    'i9200': ('i9200', '#13c2c2', 'pos'),
    'q1500': ('Q1500', '#006d75', 'pos'),
    'k200': ('K200', '#237804', 'scanner'),
}


def svg(name, color, kind):
    if kind == 'pda':
        device = f'<rect x="145" y="35" width="110" height="190" rx="14" fill="{color}"/><rect x="155" y="48" width="90" height="150" rx="6" fill="#fff" opacity=".92"/>'
    elif kind == 'rfid':
        device = f'<rect x="120" y="60" width="160" height="120" rx="10" fill="{color}"/><path d="M130 120 Q200 80 270 120" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/>'
    elif kind == 'pos':
        device = f'<rect x="130" y="50" width="140" height="170" rx="12" fill="{color}"/><rect x="145" y="180" width="110" height="25" rx="4" fill="#fff" opacity=".3"/>'
    else:
        device = f'<rect x="100" y="90" width="200" height="70" rx="8" fill="{color}"/><rect x="280" y="105" width="50" height="40" rx="4" fill="{color}" opacity=".7"/>'

    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" role="img" aria-label="{name}">
  <rect width="400" height="280" fill="#f0f5ff"/>
  {device}
  <text x="200" y="252" text-anchor="middle" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="26" font-weight="700" fill="#303133">{name}</text>
  <text x="200" y="20" text-anchor="middle" font-family="Segoe UI, sans-serif" font-size="12" fill="#909399">UROVO 优博讯</text>
</svg>'''


for pid, (name, color, kind) in PRODUCTS.items():
    (ROOT / f'{pid}.svg').write_text(svg(name, color, kind), encoding='utf-8')
    print('OK', pid)
