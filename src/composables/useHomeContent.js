import { useCorporateIndustries, useCorporateSoftware } from '@/composables/useCorporateContent'

export function useHomeContent() {
  const industries = useCorporateIndustries()
  const software = useCorporateSoftware()

  return { industries, software }
}
