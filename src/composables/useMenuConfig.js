import { computed } from 'vue'
import { menuStructure, flattenPages } from '@/data/menu'
import { useI18n } from '@/i18n'

export function useMenuConfig() {
  const { t } = useI18n()

  const menuConfig = computed(() =>
    menuStructure.map((group) => ({
      ...group,
      title: t(group.titleKey),
      children: group.children?.map((item) => ({
        ...item,
        title: t(item.titleKey),
      })),
    }))
  )

  const allPages = computed(() => {
    const pages = flattenPages(menuStructure)
    return pages.map((p) => ({
      ...p,
      title: t(p.titleKey || menuStructure.find((g) => g.id === p.id)?.titleKey || ''),
    }))
  })

  function getPageTitle(pageId) {
    const page = allPages.value.find((p) => p.id === pageId)
    return page?.title || ''
  }

  return { menuConfig, allPages, getPageTitle }
}
