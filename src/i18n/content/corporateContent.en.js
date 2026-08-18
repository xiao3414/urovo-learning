/**
 * UROVO APAC corporate website content — English
 */

export const industryLogistics = {
  title: 'Logistics Solutions',
  subtitle: 'Warehouse · transport · delivery · last mile',
  overview:
    'UROVO delivers mobile computers, scanners, RFID, and device management software for APAC logistics — from inbound and picking through dispatch, delivery, and proof of delivery.',
  challenges: [
    'Manual processes are slow, error-prone, and hard to trace',
    'Rising labor costs and tighter delivery SLAs',
    'Peak-season picking and sortation bottlenecks',
  ],
  solution:
    'From inbound to POD, UROVO provides WMS-ready mobile terminals, long-range scanning, all-in-one collection devices, and printing — with UEE/UMS for fleet deployment and remote operations.',
  applications: [
    { title: 'Warehouse operations', desc: 'Inbound, pick, verify, outbound — RT40S, DT50, DT66' },
    { title: 'Collection & delivery', desc: 'Scan, print, and pay on one device — i9000S' },
    { title: 'Parcel hubs', desc: 'Stock in/out, e-signature, receipt printing — PDA + portable printer / POS' },
    { title: 'Cold chain', desc: 'Wide-temp and cold-chain models for mixed ambient/cold workflows' },
  ],
  specs: [
    { label: 'Core flows', value: 'Collect / sort / pick / deliver / POD' },
    { label: 'Products', value: 'RT40S / DT50 / i9000S' },
    { label: 'Software', value: 'WMS SDK · UEE · UMS' },
  ],
  faqs: [
    { q: 'Do devices support cold-chain environments?', a: 'Wide-temp and cold-chain RT40S variants are available for mixed ambient and cold storage operations.' },
    { q: 'Can the platform scale for peak season?', a: 'RT40S and related devices support large-scale DC deployments with long-range scanning for high-volume operations.' },
    { q: 'Can we integrate with our WMS?', a: 'UROVO provides USDK and APIs for integration with mainstream WMS/ERP systems.' },
  ],
  useCases: [
    {
      label: 'E-commerce DC',
      challenge: 'Peak picking pressure',
      approach: 'RT40S terminals with custom workflow apps',
      outcome: 'Significant capacity improvement in reference deployments',
    },
    {
      label: 'National courier',
      challenge: 'High daily sortation volume',
      approach: 'Large-scale RT40S rollout',
      outcome: 'Efficiency gains in reference projects',
    },
  ],
  recommendedProductIds: ['rt40s', 'dt50-5g', 'i9000s'],
  heroProductId: 'rt40s',
}

export const industryManufacturing = {
  title: 'Manufacturing Solutions',
  subtitle: 'Line traceability · materials · quality',
  overview:
    'UROVO provides industrial PDAs, tablets, and RFID devices for shop-floor data capture, material traceability, quality control, and inspection — integrated with MES/ERP/QMS.',
  challenges: [
    'Incomplete traceability data for customer or export audits',
    'Manual material handling leads to errors',
    'Slow defect root-cause analysis',
  ],
  solution:
    'Capture work orders, materials, and QC data on rugged mobile devices and sync with MES/ERP for end-to-end traceability. Long-range scanning and industrial tablets cover high-bay storage and inspection rounds.',
  applications: [
    { title: 'Line traceability', desc: 'Work order, material, and QC capture — PDA + MES' },
    { title: 'High-bay storage', desc: 'Long-range scan, cold areas — RT40S' },
    { title: 'Equipment inspection', desc: 'Checklists and maintenance logs — industrial PDA / tablet' },
    { title: 'Quality control', desc: 'Inspection data and defect tracking' },
  ],
  specs: [
    { label: 'Core flows', value: 'Work order / trace / QC / inspection' },
    { label: 'Integration', value: 'MES / ERP / QMS' },
    { label: 'Products', value: 'i6310 / DT50 / RT40S' },
  ],
  faqs: [
    { q: 'Are devices durable enough for the shop floor?', a: 'Industrial protection (IP65), oil resistance, and drop ratings for continuous line use.' },
    { q: 'Do you support MES integration?', a: 'USDK and APIs enable integration with mainstream MES/ERP platforms.' },
  ],
  useCases: [
    {
      label: 'Electronics OEM',
      challenge: 'Audit traceability gaps',
      approach: 'Line PDA + MES data capture',
      outcome: 'Met tier-1 supply-chain audit requirements',
    },
    {
      label: 'Auto parts supplier',
      challenge: 'Oily, harsh environment',
      approach: 'Industrial PDA + MES',
      outcome: 'Defect trace time significantly reduced',
    },
  ],
  recommendedProductIds: ['dt50-5g', 'rt40s', 'dt66'],
  heroProductId: 'dt50-5g',
}

export const industryRetail = {
  title: 'Retail Solutions',
  subtitle: 'Store ops · inventory · checkout · membership',
  overview:
    'UROVO delivers barcode and RFID capture, mobile checkout, inventory management, and membership verification for chain retail and omnichannel operations across APAC.',
  challenges: [
    'Store counts take too long and affect accuracy and sales',
    'Omnichannel inventory synchronization is complex',
    'High-value SKUs need faster identification and checkout',
  ],
  solution:
    'Barcode: PDA + POS + printer for stock moves, counts, and checkout. RFID: tag read + handheld/fixed readers + self-checkout. UPad supports assisted selling, SoftPOS, and member verification.',
  applications: [
    { title: 'Store inventory', desc: 'Mobile cycle counts with shorter store closure time' },
    { title: 'Barcode checkout', desc: 'Scanner + POS + printer combination' },
    { title: 'RFID retail', desc: 'Tag read + checkout lane or DT630/UPad unified device' },
    { title: 'Mobile selling', desc: 'UPad — price lookup, mobile checkout, SoftPOS/NFC, member verify' },
  ],
  specs: [
    { label: 'Barcode', value: 'PDA + POS + printer' },
    { label: 'RFID', value: 'Tags + handheld/fixed readers' },
    { label: 'Emerging', value: 'UPad + SoftPOS' },
  ],
  faqs: [
    { q: 'Is RFID worth the investment?', a: 'Best ROI on fast-moving and high-value SKUs — start with a pilot store assessment.' },
    { q: 'Do you support mobile payments?', a: 'POS and UPad products support multiple payment and SoftPOS scenarios.' },
  ],
  useCases: [
    {
      label: 'Fashion chain',
      challenge: 'Omnichannel stock management',
      approach: 'Scanner + POS + PDA + printer',
      outcome: 'Faster inbound and outbound operations',
    },
    {
      label: 'RFID self-checkout',
      challenge: 'Self-service checkout experience',
      approach: 'RFID checkout lane solution',
      outcome: 'Upgraded self-service experience',
    },
  ],
  recommendedProductIds: ['dt66', 'dt50', 'i9000s'],
  heroProductId: 'dt66',
}

export const softwareUEE = {
  title: 'UEE',
  tagline: 'Enterprise Device Experience',
  subtitle: 'Cloud-connected device management and deployment',
  overview:
    'UEE is UROVO\'s IoT platform for enterprise mobility — deploy, configure, manage, monitor, and secure mobile device fleets with device lifecycle and application management capabilities.',
  lifecycle: ['Deploy', 'Configure', 'Manage', 'Monitor', 'Secure'],
  capabilities: [
    { label: 'Device management', value: 'Remote config, OTA firmware, app distribution, Enterprise Launcher' },
    { label: 'Developer tools', value: 'USDK documentation and APIs; ScanWedge / Key Mapping' },
    { label: 'Mass deployment', value: 'UFS / Software HUB for rapid customization and batch provisioning' },
    { label: 'Security', value: 'Remote wipe, geofencing, app allowlists for enterprise compliance' },
  ],
  mobilitySupport:
    'UEE supports large-scale mobile device rollouts in logistics, retail, manufacturing, finance, and healthcare — helping IT teams manage configuration, updates, and security policies.',
  faqs: [
    { q: 'How is UEE different from UMS?', a: 'UEE focuses on MDM (configuration, security, app distribution). UMS focuses on operations monitoring (health, logs, remote diagnostics).' },
    { q: 'Is developer integration supported?', a: 'USDK and developer documentation enable integration with enterprise applications.' },
  ],
  recommendedProductIds: ['dt630', 'dt66', 'rt40s'],
}

export const softwareUMS = {
  title: 'UMS',
  tagline: 'Unified Device Management',
  subtitle: 'Remote monitoring · diagnostics · alerts',
  overview:
    'UMS enables IT and operations teams to monitor, diagnose, and manage mobile device fleets remotely — supporting the monitor and diagnose stages of device lifecycle management.',
  lifecycle: ['Monitor', 'Diagnose', 'Alert', 'Secure'],
  capabilities: [
    { label: 'Real-time monitoring', value: 'Battery, storage, network, scan counts, crash logs on a health dashboard' },
    { label: 'Remote diagnostics', value: 'Log capture, remote reboot, issue isolation' },
    { label: 'Alerting', value: 'Email, SMS, Webhook notifications' },
    { label: 'Deployment', value: 'On-premises option — data stays in your environment' },
  ],
  mobilitySupport:
    'UMS complements UEE for full device lifecycle management — suited to logistics, manufacturing, and retail fleets with large numbers of field and warehouse terminals.',
  faqs: [
    { q: 'Where is data stored?', a: 'On-premises deployment is supported — data can remain on customer-owned servers.' },
    { q: 'Can remote diagnostics reduce returns?', a: 'Remote logs and diagnostics help IT resolve many issues locally without sending devices back.' },
  ],
  recommendedProductIds: ['dt50-5g', 'dt630', 'rt40s'],
}

export const aboutUrovo = {
  title: 'About UROVO',
  subtitle: 'Enterprise mobility and AIDC solutions for global businesses.',
  overview:
    'UROVO is a leading global IoT digital solution provider — devices, software, and cloud services for logistics, retail, manufacturing, payments, and healthcare. Mission: Connect the world with excellence.',
  focus: [
    { label: 'AIDC heritage', value: 'Enterprise mobile computers and data capture since 2006' },
    { label: 'Portfolio', value: 'PDA · RFID · POS · printers · tablets · scanners' },
    { label: 'Industries', value: 'Logistics, retail, manufacturing, finance, healthcare, public sector' },
    { label: 'Software', value: 'UEE device management · UMS remote operations' },
  ],
  technology:
    'UROVO focuses on enterprise mobility, data capture, RFID, and device management (UEE/UMS) — delivering hardware and software for frontline operations in logistics, retail, and manufacturing.',
  apac:
    'This site serves APAC enterprise customers and partners with English-first product information, industry solutions, and regional support. Contact our sales team for deployment consulting, product selection, or partnership inquiries.',
  milestones: [
    '2006 — Pioneering enterprise mobile computers for logistics digitization',
    '2016 — Listed on Shenzhen Stock Exchange (300531); full product portfolio',
    '2020 — 5G flagship PDA with Qualcomm',
    '2021 — UEE industry ecosystem platform launched',
    '2024 — Expanded 5G and RFID enterprise product portfolio',
  ],
  specs: [
    { label: 'Focus', value: 'Global IoT digital solutions provider' },
    {
      label: 'Market reference',
      value: 'Ranked among leading global rugged PDA vendors, according to UROVO public materials.',
    },
    { label: 'Listing', value: 'Shenzhen Stock Exchange 300531' },
  ],
}
