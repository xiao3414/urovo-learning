/**
 * APAC overseas sales training content (English)
 * Adapted for Asia-Pacific field teams — regional support, global references, English scripts
 */

export const productPDA = {
  title: 'PDA Mobile Computers',
  subtitle: 'Industrial-grade data capture · Logistics / Manufacturing / Retail / Healthcare',
  intro: `
    <h3>What is a PDA?</h3>
    <p>A mobile computer (PDA) is built for enterprise workflows — combining <strong>fast barcode/RFID capture, multitasking, and reliable wireless connectivity</strong>. Key differences vs. consumer smartphones:</p>
    <ul>
      <li><strong>Industrial durability</strong>: IP65–IP68, 1.5 m drop — suited for warehouses and shop floors</li>
      <li><strong>Professional scan engines</strong>: Higher speed and accuracy on damaged or distant barcodes</li>
      <li><strong>All-day power</strong>: 5000 mAh-class batteries with hot-swap options</li>
      <li><strong>Enterprise-ready</strong>: Stable OS builds, MDM/UEE support, ERP/WMS integration via SDK</li>
    </ul>
    <h3>Primary Use Cases (APAC)</h3>
    <ul>
      <li><strong>Logistics &amp; 3PL</strong>: Pick-up, inbound/outbound, last-mile delivery across SEA, ANZ, Japan</li>
      <li><strong>Manufacturing</strong>: Material tracking, line-side traceability, quality control</li>
      <li><strong>Retail</strong>: Store inventory, mobile POS assist, product traceability</li>
      <li><strong>Healthcare</strong>: Bedside workflows, pharmacy, asset tracking</li>
    </ul>
    <h3>Flagship Lineup (2026)</h3>
    <h4>DT66 — 6.5" flagship PDA</h4>
    <p>6.5" display · dual NFC · optional iToF volume measure · octa-core 2.4 GHz · Android 13 · IP67 · 5000 mAh hot-swap · Wi-Fi 6E</p>
    <h4>DT630 — Enterprise smartphone</h4>
    <p>Android 15 · octa-core 2.5 GHz · built-in UHF RFID (1.2 m, ≥50 tags/s, Gen2X) · 50 MP camera · 5G · Wi-Fi 6E · IP68 · rear scan engine</p>
    <h4>DT50 series — classic industrial PDA</h4>
    <p>5.7" HD+ · IP67 · 5000 mAh hot-swap · variants: DT50 5G · DT50 DP (DPM) · DT50 Ex (ATEX) · DT50B (ID card)</p>
    <h4>RT40S — long-range / cold-chain flagship</h4>
    <p>Optional 15 m scan · cold-chain −30°C · IP68 · 5200 mAh hot-swap · 38-key keypad · Wi-Fi 6</p>
    <h4>RT30 — in-warehouse logistics</h4>
    <p>3.5" · Android 14 · ≥103 dB speaker · 4900 mAh hot-swap · IP67 · ergonomic grip</p>
    <h3>Market Position</h3>
    <p>UROVO offers full-screen PDAs, keypad PDAs, RFID handhelds, wearables, tablets, printers, and scanners. <strong>#2 global rugged PDA shipments (VDC 2024)</strong> with strong APAC distributor and FAE coverage.</p>
  `,
  specs: [
    { label: 'Hero models', value: 'DT66 / DT630 / DT50 series / RT40S / RT30' },
    { label: 'OS', value: 'Android 11–15' },
    { label: 'Protection', value: 'IP65–IP68, 1.5–1.8 m drop' },
    { label: 'Scanning', value: '1D/2D/DPM/long-range 15 m/on-screen' },
    { label: 'Special editions', value: 'ATEX · cold-chain −30°C · DPM · ID card' },
    { label: 'Resources', value: 'file.en.urovo.com (English collateral)' },
  ],
  scripts: [
    { scene: 'Opening', content: 'Hi [Name], I\'m [Your Name] from UROVO APAC. I understand your team still relies on manual entry in the warehouse — we\'ve helped regional 3PLs lift picking efficiency by 30%+. Could we spend 15 minutes on your biggest pain point?' },
    { scene: 'FAB pitch', content: 'RT40S (Feature) offers ultra-long-range scanning and IP67 (Advantage), so pickers don\'t bend to every label and devices survive drops (Benefit) — lower TCO and faster throughput.' },
    { scene: 'vs. smartphone', content: 'Consumer phones fail in warehouses: fragile, slow scan, short battery. Industrial PDAs are built for 8–12 hour shifts with scan rates phones cannot match — better TCO over 3 years.' },
    { scene: 'POC close', content: 'Let\'s run a 2-week POC with 5 units — our regional FAE can support on-site. If KPIs hit target, we align on rollout timing. Does next week work for a kick-off?' },
  ],
  faqs: [
    { q: 'Can you integrate with our WMS/ERP?', a: 'Yes. USDK and Android SDK support SAP, Oracle, local WMS/TMS, and ISV partners across APAC.' },
    { q: 'Damaged or wrinkled barcodes?', a: 'Honeywell/Zebra-class engines with 99.9%+ read rates. DL-tuned models for poor labels — recommend a live demo.' },
    { q: 'Why UROVO vs. competitors?', a: '① Proven read performance ② Open SDK ③ Global scale (#2 VDC) ④ APAC FAE & distributor network.' },
    { q: 'What if a unit fails?', a: 'Regional RMA and swap programs via APAC service partners — SLA depends on contract tier.' },
  ],
  cases: [
    { customer: 'Regional express carrier (SEA)', industry: 'Logistics', challenge: 'Slow sorting, high failure rate', solution: '5000+ RT40S + custom sort app', result: '35% throughput gain, 60% fewer failures' },
    { customer: 'Supermarket chain (ANZ)', industry: 'Retail', challenge: 'Long stock counts', solution: '200 stores on DT50 + inventory app', result: 'Count time: 2 days → 4 hours' },
    { customer: 'Auto parts plant', industry: 'Manufacturing', challenge: 'Line traceability, oily environment', solution: 'Industrial PDA + MES', result: 'Defect trace: 4 h → 15 min' },
  ],
}

export const productRFID = {
  title: 'RFID Data Capture',
  subtitle: 'Bulk read · non-line-of-sight · real-time inventory visibility',
  intro: `
    <h3>What RFID Solves</h3>
    <p>Move from scan-one-by-one to bulk identification:</p>
    <ul>
      <li><strong>Barcode</strong>: item-level traceability, lower tag cost</li>
      <li><strong>RFID</strong>: bulk, non-line-of-sight reads — ideal for cycle counts and inbound/outbound</li>
    </ul>
    <h3>Core Capabilities</h3>
    <ul>
      <li>UHF 860–960 MHz, 0.5–20 m range (model dependent)</li>
      <li>Up to 1300+ tags/s (RFG91 / DT50U Lite, Impinj E710 / Gen2X)</li>
      <li><strong>Handhelds</strong>: DT50U · DT50U Lite · DT50D · DT630 (built-in 1.2 m)</li>
      <li><strong>RFID sled</strong>: RFG91 (barcode + RFID tri-mode, 390 g, 15 m+)</li>
      <li><strong>Fixed</strong>: FR1000 · FR2000 · FR7000 series</li>
    </ul>
    <h3>APAC Scenarios</h3>
    <ul>
      <li><strong>Fashion retail</strong>: RFID tags + self-checkout (Uniqlo-style)</li>
      <li><strong>Warehouse cycle count</strong>: 90% faster vs. barcode-only</li>
      <li><strong>Asset management</strong>: bulk fixed-asset audits in offices and plants</li>
    </ul>
  `,
  specs: [
    { label: 'Handhelds', value: 'DT50U / DT50U Lite / DT50D / DT630' },
    { label: 'RFID sled', value: 'RFG91 (1300+ tags/s, 15 m+)' },
    { label: 'Fixed readers', value: 'FR1000 / FR2000 / FR7000' },
    { label: 'Protocols', value: 'EPC C1G2 / ISO 18000-6C / Gen2X' },
    { label: 'Hybrid', value: 'Barcode + RFID combo / RFG91 expansion' },
  ],
  scripts: [
    { scene: 'Discovery', content: 'How many staff and hours does a full inventory take today? RFID can cut that to roughly 1/10 — no line-of-sight scanning per item.' },
    { scene: 'Value', content: 'RFID drives real-time inventory visibility. APAC retail pilots often lift accuracy from ~85% to 99.5%, reducing stock-outs and overstock.' },
    { scene: 'Tag cost objection', content: 'RFID tags cost more than barcodes, but on high-value or fast-moving SKUs the tag is a small fraction of margin. We can run ROI on a pilot category first.' },
  ],
  faqs: [
    { q: 'Can RFID coexist with barcodes?', a: 'Yes — barcodes for item traceability, RFID for bulk counts. UROVO devices read both.' },
    { q: 'Metal or liquid environments?', a: 'Use on-metal tags and proper placement — regional FAE can advise after site survey.' },
  ],
  cases: [
    { customer: 'Global fashion brand', industry: 'Retail', challenge: 'Self-checkout speed', solution: 'RFID checkout + POS', result: 'Faster checkout experience' },
    { customer: 'Apparel brand (APAC)', industry: 'Retail', challenge: 'Inaccurate stock', solution: 'RFID tags + DT50U', result: '99.5% accuracy, 90% faster counts' },
  ],
}

export const productPOS = {
  title: 'POS Payment Terminals',
  subtitle: 'Scan · card · contactless · full-scenario payment acceptance',
  intro: `
    <h3>Payment Landscape (APAC)</h3>
    <p>Accept local wallets, cards, and QR where regulations allow. UROVO covers <strong>scan, chip, contactless, NFC, and SoftPOS</strong>.</p>
    <h3>Scan Payment Peripherals</h3>
    <ul>
      <li><strong>Q1500 smart speaker</strong>: QR payment audio confirm, 4G/Wi-Fi</li>
      <li><strong>Q200 scan box</strong>: 360° scan, plug-and-play</li>
      <li><strong>S710/S716 scanners</strong>: wired/wireless, multi-OS</li>
    </ul>
    <h3>Smart POS (certified)</h3>
    <ul>
      <li><strong>i9100</strong>: 5.5" · Android 13 · mag/IC/contactless/scan · built-in printer</li>
      <li><strong>i9200</strong>: slim · 80 mm/s print · optional eSIM/scanner</li>
      <li><strong>i9600</strong>: 6.745" · optional octa-core · under-display NFC · optional customer display</li>
      <li><strong>i9000S</strong>: PDA + POS combo · rugged 1.5 m drop · delivery/collection/field payment</li>
    </ul>
    <h3>Lite POS</h3>
    <p><strong>i9200 lite</strong>: c-stores, F&amp;B, markets — lower cost, QR-focused where card cert not required.</p>
    <p><strong>U100 price checker</strong>: 10.1" · NFC · optional UHF · POE · in-aisle price lookup.</p>
  `,
  specs: [
    { label: 'Certified POS', value: 'i9100 / i9200 / i9600 / i5300 series' },
    { label: 'Mobile payment', value: 'i9000S (PDA-POS combo)' },
    { label: 'Lite POS', value: 'i9200 lite / U100 kiosk' },
    { label: 'Peripherals', value: 'Q1500 speaker / Q200 box / S710 gun' },
    { label: 'Certifications', value: 'PCI / EMV (model & region specific)' },
  ],
  scripts: [
    { scene: 'Scenario entry', content: 'Which payment methods do your stores accept today? One device can cover QR, cards, and contactless — plus receipt print where needed.' },
    { scene: 'Certified vs. lite', content: 'For F&amp;B or small retail, i9200 lite is cost-effective. For bank-card acceptance and PCI, i9100 certified POS is the right fit.' },
    { scene: 'Smart speaker', content: 'For static QR merchants, Q1500 announces each payment — reduces disputes, works on 4G/Wi-Fi.' },
  ],
  faqs: [
    { q: 'Certified vs. lite POS?', a: 'Certified POS supports full card rails with PCI/EMV; lite units target QR/light checkout — confirm local regulations with regional PM.' },
    { q: 'Receipt printing?', a: 'i9100/i9200/i9000S include printers for mobile receipt scenarios.' },
  ],
  cases: [
    { customer: 'Convenience chain', industry: 'Retail', challenge: 'Multi-payment, fraud', solution: 'i9200 lite + Q1500', result: 'Faster checkout, audible confirm' },
    { customer: 'Last-mile logistics', industry: 'Logistics', challenge: 'Collect + print + pay on one device', solution: 'i9000S', result: 'Single device for entire stop' },
  ],
}

export const softwareUEE = {
  title: 'UEE Cloud Platform',
  subtitle: 'Device + cloud · development and MDM ecosystem',
  intro: `
    <h3>Platform Role</h3>
    <p>UEE is UROVO's <strong>IoT digital ecosystem</strong> — edge-to-cloud for fleet deployment across APAC subsidiaries and partners.</p>
    <h3>Core Modules</h3>
    <ul>
      <li><strong>USDK</strong>: developer APIs and docs</li>
      <li><strong>Enterprise OS</strong>: hardened OS · OTA firmware</li>
      <li><strong>APP Market</strong>: partner app distribution</li>
      <li><strong>UFS / Software HUB</strong>: staging and bulk configuration</li>
      <li><strong>ScanWedge / Key Mapping</strong>: scan/key remap without custom dev</li>
      <li><strong>Enterprise Launcher</strong>: kiosk / single-app mode</li>
    </ul>
    <h3>Industries</h3>
    <p>Logistics · retail · e-commerce · manufacturing · payments · healthcare · public sector</p>
  `,
  specs: [
    { label: 'Role', value: 'IoT edge-cloud ecosystem' },
    { label: 'Development', value: 'USDK + documentation' },
    { label: 'Management', value: 'Remote config, OTA, app push' },
    { label: 'Staging', value: 'UFS bulk config, OEM Config' },
  ],
  scripts: [
    { scene: 'Cross-sell', content: 'With 200 PDAs in the field, how do you push app updates? UEE remote push, Wi-Fi profiles, and geo-fence can cut IT effort dramatically.' },
    { scene: 'Security', content: 'Lost device? Remote wipe, app whitelist, and geofence help meet enterprise security policies.' },
  ],
  faqs: [
    { q: 'UEE vs. UMS?', a: 'UEE = MDM (config, security, apps). UMS = ops monitoring (health, logs, remote diagnostics).' },
  ],
  cases: [
    { customer: 'Regional 3PL', industry: 'Logistics', challenge: '5000 devices, fragmented IT', solution: 'UEE central management', result: 'App rollout: 2 weeks → 1 day' },
  ],
}

export const softwareUMS = {
  title: 'UMS Remote Device Management',
  subtitle: 'Health monitoring · remote diagnostics · alerts',
  intro: `
    <h3>Platform Role</h3>
    <p>UMS lets IT/ops <strong>monitor and support terminals remotely</strong> across countries and time zones.</p>
    <h3>Capabilities</h3>
    <ul>
      <li>Live metrics: battery, storage, network, scan counts, crash logs</li>
      <li>Remote: log pull, reboot, triage</li>
      <li>Alerts: email, SMS, webhook</li>
      <li>Works with UTMS (payment terminals) and KMS (keys)</li>
    </ul>
    <h3>Sales Value</h3>
    <p>~80% of issues can be diagnosed remotely — less RMA freight and less downtime for APAC distributed fleets.</p>
  `,
  specs: [
    { label: 'Monitoring', value: 'Fleet health dashboard' },
    { label: 'Remote', value: 'Logs, reboot, diagnostics' },
    { label: 'Deployment', value: 'On-prem option for data residency' },
  ],
  scripts: [
    { scene: 'Pain point', content: 'When a device fails, stores call HQ and ship units back — days of downtime. UMS often resolves 80% remotely before RMA.' },
  ],
  faqs: [
    { q: 'Where is data stored?', a: 'Cloud or on-prem — important for data residency in certain APAC markets.' },
  ],
  cases: [
    { customer: 'Manufacturing plant', industry: 'Manufacturing', challenge: 'Line PDAs fail silently', solution: 'UMS monitoring + alerts', result: 'Response: 4 h → 30 min' },
  ],
}

export const industryLogistics = {
  title: 'Smart Logistics',
  subtitle: 'Warehouse · transport · delivery · last mile',
  intro: `
    <h3>Pain Points (APAC)</h3>
    <ul>
      <li>Manual entry: slow, error-prone, no traceability</li>
      <li>Rising labor cost + same-day delivery pressure</li>
      <li>Peak-season picking bottlenecks (11.11, 12.12, year-end)</li>
    </ul>
    <h3>End-to-End Flow</h3>
    <p>Inbound → pick → verify → outbound → delivery → POD — each step has UROVO hardware + partner WMS options.</p>
    <h3>Parcel hub / last-mile checklist</h3>
    <ul>
      <li>Collection scan → i9000S (scan + print + pay)</li>
      <li>In/outbound → PDA + WMS</li>
      <li>Delivery POD → PDA + e-signature</li>
      <li>Receipt print → portable printer / i9000S</li>
      <li>Payment → POS / Q1500</li>
    </ul>
    <h3>Recommended Products</h3>
    <p>RT30 (in-warehouse) · RT40S (long-range/cold chain) · DT50/DT66 (general) · i9000S · portable printers · Q1500</p>
  `,
  specs: [
    { label: 'Core flows', value: 'Collect/sort/pick/deliver/POD' },
    { label: 'Products', value: 'RT40S / DT50 / i9000S' },
    { label: 'Software', value: 'WMS SDK + UEE/UMS' },
  ],
  scripts: [
    { scene: 'Industry entry', content: 'APAC logistics faces labor and SLA pressure together. We support regional carriers and 3PLs on sortation and last mile — which step hurts most today?' },
    { scene: 'Picking', content: 'RT40S long-range scan means less bending — one APAC DC reported 500+ extra picks per day per aisle.' },
  ],
  faqs: [
    { q: 'Cold chain?', a: 'Wide-temp and −30°C cold-chain RT40S variants for mixed ambient/cold operations.' },
    { q: 'Peak season?', a: 'Proven 1000+ unit deployments at major e-commerce DCs — 40% peak capacity uplift in reference projects.' },
  ],
  cases: [
    { customer: 'E-commerce DC (SEA)', industry: 'Logistics', challenge: 'Peak picking', solution: '1000 RT40S + custom app', result: '40% capacity uplift' },
    { customer: 'National courier', industry: 'Logistics', challenge: 'High daily volume', solution: '5000+ RT40S', result: '35% efficiency gain' },
  ],
}

export const industryManufacturing = {
  title: 'Smart Manufacturing',
  subtitle: 'Line traceability · materials · quality',
  intro: `
    <h3>Pain Points</h3>
    <ul>
      <li>Traceability gaps for customer or export audits</li>
      <li>Manual material moves → errors</li>
      <li>Slow defect root-cause analysis</li>
    </ul>
    <h3>Scenarios</h3>
    <ul>
      <li><strong>High-bay storage</strong>: long-range scan, cold areas → RT40S</li>
      <li><strong>Line traceability</strong>: work order, material, QC → PDA + MES</li>
      <li><strong>Inspection rounds</strong>: industrial PDA / tablet</li>
    </ul>
    <h3>Products</h3>
    <p>Lightweight handhelds · DT50 · RT40S · industrial tablets</p>
  `,
  specs: [
    { label: 'Flows', value: 'Work order / trace / QC / rounds' },
    { label: 'Integration', value: 'MES / ERP / QMS' },
    { label: 'Products', value: 'DT50 / RT40S / tablets' },
  ],
  scripts: [
    { scene: 'Compliance driver', content: 'Export and automotive customers require end-to-end traceability. We help plants capture data from raw material to finished goods for audit readiness.' },
  ],
  faqs: [
    { q: 'Shop-floor durability?', a: 'IP65+, oil and drop resistant — built for continuous line use.' },
  ],
  cases: [
    { customer: 'Electronics OEM', industry: 'Manufacturing', challenge: 'Audit trace gaps', solution: 'Line PDA + MES', result: 'Passed tier-1 supply-chain audit' },
    { customer: 'Auto parts supplier', industry: 'Manufacturing', challenge: 'Oily environment', solution: 'Industrial PDA + MES', result: 'Defect trace 4 h → 15 min' },
  ],
}

export const industryRetail = {
  title: 'Chain Retail',
  subtitle: 'Store ops · inventory · checkout · membership',
  intro: `
    <h3>Typical Needs</h3>
    <ul>
      <li>Scan item · pay · stock in/out · cycle count</li>
      <li>Combo: scanner + POS + printer + PDA</li>
    </ul>
    <h3>RFID retail (reference: Uniqlo model)</h3>
    <ul>
      <li>RFID tag → handheld/fixed read → self-checkout</li>
      <li>Products: RFID checkout lane, or DT630/UPad unified device</li>
    </ul>
    <h3>UPad in store</h3>
    <p>Sales assist · price lookup · mobile checkout · SoftPOS/NFC · member verify</p>
  `,
  specs: [
    { label: 'Barcode', value: 'PDA + POS + printer' },
    { label: 'RFID', value: 'Tags + handheld/fixed' },
    { label: 'Emerging', value: 'UPad + SoftPOS' },
  ],
  scripts: [
    { scene: 'Store pain', content: 'Full-store counts often close the shop for half a day. Our APAC retail pilots finish in hours with 99%+ accuracy.' },
  ],
  faqs: [
    { q: 'Is RFID worth it?', a: 'Best ROI on fast-moving and high-value SKUs — start with one pilot store.' },
  ],
  cases: [
    { customer: 'Fashion chain (APAC)', industry: 'Retail', challenge: 'Omnichannel stock', solution: 'Scanner + POS + PDA', result: 'Faster inbound/outbound' },
    { customer: 'Global apparel brand', industry: 'Retail', challenge: 'Self-checkout', solution: 'RFID checkout', result: 'Upgraded self-service experience' },
  ],
}

export const salesCompany = {
  title: 'Company & Brand',
  subtitle: 'Know UROVO · sell with confidence in APAC',
  intro: `
    <h3>Who We Are</h3>
    <p>UROVO is a leading global <strong>IoT digital solution provider</strong> — devices, software, and cloud for logistics, retail, manufacturing, payments, and healthcare.</p>
    <p><strong>Mission</strong>: Connect the world with excellence · Enable digital transformation</p>
    <h3>Why UROVO?</h3>
    <ul>
      <li><strong>20 years in AIDC</strong>: pioneering enterprise mobile computers since 2006</li>
      <li><strong>Global scale</strong>: #2 worldwide rugged PDA shipments (VDC 2024)</li>
      <li><strong>Full portfolio</strong>: PDA · RFID · POS · printers · tablets · scanners</li>
      <li><strong>Technology</strong>: AI · Wi-Fi 6E · RFID Gen2X · 5G · Red Dot design awards</li>
      <li><strong>APAC presence</strong>: subsidiaries and partners across SEA, North Asia, ANZ, India</li>
      <li><strong>Listed company</strong>: Shenzhen Stock Exchange (300531) — financial transparency</li>
    </ul>
    <h3>Scale (2026 reference)</h3>
    <ul>
      <li><strong>UEE platform</strong>: 4M+ active devices</li>
      <li><strong>Global reach</strong>: 100+ countries · 100+ service touchpoints</li>
      <li><strong>Partners</strong>: 500+ distributors, ISVs, and integrators</li>
      <li><strong>Manufacturing</strong>: 780k+ m² · 8M+ units/year capacity</li>
    </ul>
    <h3>Sales Resources (APAC)</h3>
    <ul>
      <li>English library: <strong>file.en.urovo.com</strong></li>
      <li>Chinese library: file.urovo.com (internal OA)</li>
      <li>Website: www.urovo.com / www.en.urovo.com</li>
      <li>Contact regional marketing for localized decks and demo units</li>
    </ul>
    <h3>Brand Guidelines</h3>
    <ul>
      <li>Every employee represents the brand — accuracy over speculation</li>
      <li>Never share unreleased specs, pricing, or confidential customer data</li>
      <li>Escalate unknowns to PM/FAE — do not guess commitments</li>
      <li>Before visits: datasheet, relevant APAC case study, approved pricing path</li>
    </ul>
  `,
  specs: [
    { label: 'Positioning', value: 'Global IoT digital solutions' },
    { label: 'Listing', value: 'SZSE 300531' },
    { label: 'Market', value: '#2 global rugged PDA (VDC 2024)' },
    { label: 'UEE', value: '4M+ active devices' },
  ],
  scripts: [
    { scene: 'Company intro', content: 'UROVO has 20 years in AIDC and is #2 globally in rugged PDAs. We deliver hardware, software, and cloud — with APAC reference deployments in logistics and retail.' },
    { scene: 'Credibility', content: 'As a listed AIDC specialist, our RT40S and DT50 5G won Red Dot awards — proven industrial design and reliability.' },
  ],
  faqs: [
    { q: 'Where to download collateral?', a: 'file.en.urovo.com for English datasheets, brochures, and case summaries.' },
    { q: 'What to bring to a client meeting?', a: 'Datasheet, 1–2 relevant APAC references, and confirm pricing through your regional sales ops channel.' },
  ],
  cases: [],
}

export const salesCustomerAnalysis = {
  title: 'Customer Analysis',
  subtitle: 'SPIN · BANT · decision mapping',
  intro: `
    <h3>BANT Qualification</h3>
    <ul>
      <li><strong>B Budget</strong>: range and approval path?</li>
      <li><strong>A Authority</strong>: economic buyer?</li>
      <li><strong>N Need</strong>: top pain to fix?</li>
      <li><strong>T Timeline</strong>: go-live target?</li>
    </ul>
    <h3>SPIN Questions</h3>
    <ul>
      <li><strong>S Situation</strong>: warehouse size, daily throughput?</li>
      <li><strong>P Problem</strong>: current capture method?</li>
      <li><strong>I Implication</strong>: cost of errors/delays?</li>
      <li><strong>N Need-payoff</strong>: if throughput +30%, what changes?</li>
    </ul>
    <h3>Decision Map</h3>
    <p>IT, procurement, and operations each have different KPIs — plan a joint discovery session when possible.</p>
  `,
  specs: [
    { label: 'Framework', value: 'BANT + SPIN' },
    { label: 'Goal', value: 'Real project vs. price check' },
  ],
  scripts: [
    { scene: 'BANT', content: 'Budget range? Decision maker? Urgent problem? Target go-live?' },
    { scene: 'SPIN', content: '(S) Site scale and volume? (P) How do you capture data now? (I) What does that cost you? (N) What if efficiency rose 30%?' },
  ],
  faqs: [
    { q: 'Customer says "just researching"?', a: 'Use SPIN to uncover pain, share APAC cases, build trust before pushing SKU.' },
    { q: 'Real opportunity?', a: 'Full BANT = qualified; price-only with no buyer = nurture list.' },
  ],
  cases: [
    { customer: 'New rep playbook', industry: 'Method', challenge: 'First call anxiety', solution: '15-min SPIN discovery', result: 'Won POC → 100 units' },
  ],
}

export const salesScripts = {
  title: 'Sales Script Library',
  subtitle: 'Full cycle · objections · negotiation',
  intro: `
    <h3>Sales Cycle</h3>
    <p>Prospect → discover → propose → quote → negotiate → close → customer success</p>
    <h3>FAB</h3>
    <ul>
      <li><strong>F Feature</strong>: e.g. RT40S long-range scan</li>
      <li><strong>A Advantage</strong>: less bending, faster reads</li>
      <li><strong>B Benefit</strong>: higher picks, lower TCO</li>
    </ul>
    <h3>Common Objections</h3>
    <p>Price · competitor · timing · authority · trust · incumbent vendor</p>
  `,
  specs: [
    { label: 'Methods', value: 'FAB / SPIN / BANT / ROI' },
    { label: 'Principle', value: 'Outcome-led · no false promises' },
  ],
  scripts: [
    { scene: 'Cold call', content: 'Hi [Name], UROVO APAC — we help [industry] teams improve warehouse capture. We supported [reference] with ~30% efficiency gain. Who owns operations or IT for this?' },
    { scene: 'Too expensive', content: 'Understood. Let\'s model 3-year TCO: device is one-time; daily productivity gain compounds — I\'ll share a simple ROI sheet.' },
    { scene: 'Need to think', content: 'Of course — is it budget, technical fit, or approval process? I can tailor material for your internal review.' },
    { scene: 'Incumbent vendor', content: 'Many APAC accounts keep a second source or run POC on new sites. We offer demo units — let data decide.' },
    { scene: 'Don\'t know answer', content: 'Great question — I\'ll confirm with our FAE and reply by [time]. I won\'t guess on specs or timelines.' },
    { scene: 'Close', content: 'POC results look good. If we align on config, I\'ll send the quote and delivery plan — can we target signature this week?' },
  ],
  faqs: [
    { q: '"Send me a brochure"', a: 'Happy to — which matters most: efficiency, integration, or cost? I\'ll send the most relevant pack.' },
    { q: 'Deal stalling?', a: 'Assumptive close: if specs are approved, which month should we reserve stock and FAE?' },
  ],
  cases: [
    { customer: 'Objection handling', industry: 'Skill', challenge: '20% above competitor', solution: 'ROI + POC + TCO', result: 'Customer accepted premium' },
  ],
}

export const salesCollaboration = {
  title: 'Internal Collaboration (APAC)',
  subtitle: 'Who to contact · how work flows across regions',
  intro: `
    <h3>Product Development (IPD) — manage customer expectations</h3>
    <ul>
      <li><strong>Concept</strong>: market insight, charter → CDCP</li>
      <li><strong>Design</strong>: architecture, prototypes → PDCP</li>
      <li><strong>Validation</strong>: DVT/PVT → LRR (mass production)</li>
      <li><strong>Launch</strong>: ramp, GTM, early containment (EPC)</li>
      <li><strong>Lifecycle</strong>: updates, feedback, EOL</li>
    </ul>
    <h4>Sample stage shorthand</h4>
    <ul>
      <li><strong>EVT</strong>: engineering validation</li>
      <li><strong>DVT</strong>: design validation</li>
      <li><strong>PVT</strong>: production verification</li>
      <li><strong>MP</strong>: mass production</li>
    </ul>
    <h3>Teams you will work with</h3>
    <ul>
      <li><strong>APAC Sales / Overseas BU</strong>: regional quota, channel, key accounts</li>
      <li><strong>Product Management</strong>: roadmap, specs, GTM, sales enablement</li>
      <li><strong>Mobile Product R&amp;D</strong>: PDA/POS hardware and firmware</li>
      <li><strong>Industry Solutions</strong>: WMS/MES customization, project delivery</li>
      <li><strong>Regional Marketing</strong>: localized collateral, events, demos</li>
      <li><strong>Customer Service</strong>: RMA, SLA, escalations</li>
      <li><strong>FAE / Pre-sales</strong>: POC, demos, technical win</li>
    </ul>
    <h3>Deal flow</h3>
    <ul>
      <li><strong>Discovery</strong>: sales → PM/FAE feasibility</li>
      <li><strong>Proposal</strong>: datasheets + regional marketing assets</li>
      <li><strong>POC</strong>: FAE + demo pool</li>
      <li><strong>Quote/contract</strong>: regional sales ops + finance/credit</li>
      <li><strong>Delivery</strong>: supply chain → CS handover</li>
    </ul>
    <h3>Marketing support</h3>
    <ul>
      <li>Request localized PPT/video through <strong>regional marketing</strong> (not CN-only SC05 for APAC — use your country lead)</li>
      <li>English assets: file.en.urovo.com</li>
      <li>Demo units: coordinate with FAE and sample pool</li>
    </ul>
    <h3>Channel</h3>
    <p>Distributor tiers + ISV (WMS/MES) and SI partners — confirm APAC partner policy with your sales director.</p>
    <h3>Information security</h3>
    <ul>
      <li>Do not disclose: unreleased products, confidential pricing, other customers' data</li>
      <li>Route external statements through approved spokesperson when required</li>
      <li>Never commit custom dev scope or dates without Industry Solutions sign-off</li>
    </ul>
  `,
  specs: [
    { label: 'Technical', value: 'Regional FAE + Customer Service' },
    { label: 'Collateral', value: 'Regional marketing / file.en.urovo.com' },
    { label: 'POC', value: 'FAE + demo/sample pool' },
  ],
  scripts: [],
  faqs: [
    { q: 'POC demo units?', a: 'Open ticket via regional FAE — sample team prepares flash/test build.' },
    { q: 'Custom software?', a: 'Escalate to Industry Solutions — do not promise timeline or scope alone.' },
  ],
  cases: [],
}
