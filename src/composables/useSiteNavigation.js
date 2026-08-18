import { computed } from 'vue'
import { useProductCatalog } from '@/composables/useProductCatalog'
import { useI18n } from '@/i18n'

const CONTACT_SALES_URL = 'https://www.urovo.com'
const DOWNLOADS_URL = 'https://file.en.urovo.com'
const DOCS_URL = 'https://file.en.urovo.com'
const UROVO_WEB_URL = 'https://www.urovo.com'

const CATEGORY_IDS = ['pda', 'tablet', 'wearable', 'rfid', 'pos', 'scanner', 'printer']

export function useSiteNavigation() {
  const { t } = useI18n()
  const { productCategories } = useProductCatalog()

  const productLinks = computed(() =>
    CATEGORY_IDS.map((id) => {
      const cat = productCategories.value.find((c) => c.id === id)
      return {
        id,
        label: cat?.title || id,
        desc: t(`home.portfolio.${id}`),
        path: `/products?category=${id}`,
      }
    })
  )

  const solutionLinks = computed(() => [
    {
      id: 'logistics',
      label: t('site.nav.logistics'),
      desc: t('site.navDesc.logistics'),
      path: '/industry/logistics',
    },
    {
      id: 'retail',
      label: t('site.nav.retail'),
      desc: t('site.navDesc.retail'),
      path: '/industry/retail',
    },
    {
      id: 'manufacturing',
      label: t('site.nav.manufacturing'),
      desc: t('site.navDesc.manufacturing'),
      path: '/industry/manufacturing',
    },
  ])

  const softwareLinks = computed(() => [
    {
      id: 'uee',
      label: 'UEE',
      desc: t('site.navDesc.uee'),
      path: '/software/uee',
    },
    {
      id: 'ums',
      label: 'UMS',
      desc: t('site.navDesc.ums'),
      path: '/software/ums',
    },
  ])

  const resourceLinks = computed(() => [
    {
      id: 'downloads',
      label: t('site.nav.downloads'),
      desc: t('site.navDesc.downloads'),
      href: DOWNLOADS_URL,
      external: true,
    },
    {
      id: 'documentation',
      label: t('site.nav.documentation'),
      desc: t('site.navDesc.documentation'),
      href: DOCS_URL,
      external: true,
    },
    {
      id: 'product-resources',
      label: t('site.nav.productResources'),
      desc: t('site.navDesc.productResources'),
      path: '/resources',
    },
  ])

  const aboutLinks = computed(() => [
    {
      id: 'about-urovo',
      label: t('site.nav.aboutUrovo'),
      desc: t('site.navDesc.aboutUrovo'),
      path: '/about',
    },
    {
      id: 'contact',
      label: t('site.nav.contact'),
      desc: t('site.navDesc.contact'),
      href: CONTACT_SALES_URL,
      external: true,
    },
  ])

  const megaMenuGroups = computed(() => [
    {
      id: 'products',
      label: t('site.nav.products'),
      panelLabel: t('site.mega.products'),
      links: productLinks.value,
      viewAll: { path: '/products', label: t('site.nav.viewAllProducts') },
    },
    {
      id: 'solutions',
      label: t('site.nav.solutions'),
      panelLabel: t('site.mega.solutions'),
      links: solutionLinks.value,
    },
    {
      id: 'software',
      label: t('site.nav.software'),
      panelLabel: t('site.mega.software'),
      links: softwareLinks.value,
    },
    {
      id: 'resources',
      label: t('site.nav.resources'),
      panelLabel: t('site.mega.resources'),
      links: resourceLinks.value,
    },
    {
      id: 'about',
      label: t('site.nav.about'),
      panelLabel: t('site.mega.about'),
      links: aboutLinks.value,
    },
  ])

  const footerColumns = computed(() => [
    {
      title: t('site.nav.products'),
      links: [
        { id: 'all-products', label: t('site.nav.viewAllProducts'), path: '/products' },
        ...productLinks.value.slice(0, 4),
      ],
    },
    {
      title: t('site.nav.solutions'),
      links: solutionLinks.value,
    },
    {
      title: t('site.nav.software'),
      links: softwareLinks.value,
    },
    {
      title: t('site.nav.resources'),
      links: resourceLinks.value,
    },
    {
      title: t('site.nav.about'),
      links: [
        { id: 'about', label: t('site.nav.aboutUrovo'), path: '/about' },
        { id: 'contact', label: t('site.nav.contact'), href: CONTACT_SALES_URL, external: true },
      ],
    },
  ])

  return {
    productLinks,
    solutionLinks,
    softwareLinks,
    resourceLinks,
    aboutLinks,
    megaMenuGroups,
    footerColumns,
    contactSalesUrl: CONTACT_SALES_URL,
    downloadsUrl: DOWNLOADS_URL,
    urovoWebUrl: UROVO_WEB_URL,
  }
}
