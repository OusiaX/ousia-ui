import type { ItemState } from '@zag-js/accordion'
import { createContext } from '@ousia-ui/ark/utils'

export interface UseAccordionItemContext extends ItemState {}

export const [AccordionItemProvider, useAccordionItemContext] = createContext<UseAccordionItemContext>({
  name: 'AccordionItemContext',
  hookName: 'useAccordionItemContext',
  providerName: '<AccordionItemProvider />',
})
