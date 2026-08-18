import fs from 'fs'
import { translateSpecValue } from '../src/i18n/specTranslate.js'
import { productTextEn } from '../src/i18n/products.en.js'
import { productSpecsEn } from '../src/i18n/productSpecs.en.js'

const src = fs.readFileSync('./src/data/products.js', 'utf8')
const zh = /[\u4e00-\u9fff]/

const catalogMatch = src.match(/export const productCatalog = \[([\s\S]*?)\]\s*\n\s*export function getProductById/)
const catalogSrc = catalogMatch ? catalogMatch[1] : src

const products = []
const re = /id:\s*["']([^"']+)["'][\s\S]*?specs:\s*\[([\s\S]*?)\]\s*,/g
let m
while ((m = re.exec(catalogSrc)) !== null) {
  const id = m[1]
  const block = m[2]
  const values = [...block.matchAll(/value:\s*["']([^"']*)["']/g)].map((x) => x[1])
  products.push({ id, values })
}

let overrideCount = 0
let ruleCount = 0
const issues = []
for (const p of products) {
  const en = productTextEn[p.id]
  p.values.forEach((val, i) => {
    let translated
    if (en?.specs?.[i]?.value) {
      translated = en.specs[i].value
      overrideCount++
    } else if (productSpecsEn[p.id]?.[i]?.value) {
      translated = productSpecsEn[p.id][i].value
      overrideCount++
    } else {
      translated = translateSpecValue(val)
      ruleCount++
    }
    if (zh.test(translated)) {
      issues.push({ id: p.id, en: translated })
    }
  })
}

console.log(
  JSON.stringify(
    {
      productCount: products.length,
      issueCount: issues.length,
      overrideCount,
      ruleCount,
      issues: issues.slice(0, 40),
    },
    null,
    2
  )
)
