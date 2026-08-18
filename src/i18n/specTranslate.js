/**
 * Rule-based spec value translation (ZH → EN).
 * Preserves numbers, units, and technical tokens. Per-product overrides in products.en.js take precedence.
 */
export function translateSpecValue(value) {
  if (!value || typeof value !== 'string') return value

  let v = value

  const rules = [
    [/（可升级至/g, '(upgradable to '],
    [/可升级至/g, 'upgradable to '],
    [/（/g, ' ('],
    [/）/g, ')'],
    [/八核/g, 'Octa-core'],
    [/(\d+)\s*核/g, '$1-core'],
    [/(\d+(?:\.\d+)?)\s*寸/g, '$1-inch'],
    [/独立/g, 'Dedicated'],
    [/内置/g, 'Built-in'],
    [/后置/g, 'Rear'],
    [/前置/g, 'Front'],
    [/专业/g, 'Professional'],
    [/可拆卸/g, 'Removable'],
    [/最大/g, 'Max'],
    [/跌落/g, 'drop'],
    [/带套/g, 'with case'],
    [/即扫即看/g, 'Instant scan-to-view'],
    [/绿光瞄准/g, 'Green-dot aimer'],
    [/一维\/二维/g, '1D/2D'],
    [/屏幕扫码/g, 'On-screen scanning'],
    [/标签\/秒/g, 'tags/sec'],
    [/万像素/g, ' MP'],
    [/至/g, ' to '],
    [/·/g, ' · '],
  ]

  for (const [pattern, replacement] of rules) {
    v = v.replace(pattern, replacement)
  }

  return v.replace(/\s{2,}/g, ' ').trim()
}
