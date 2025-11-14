import { createContext } from '@ousia-ui/ark/utils'
import type { ItemState } from '@zag-js/accordion'

export interface UseAccordionItemContext extends ItemState {}

export const [AccordionItemProvider, useAccordionItemContext] =
  createContext<UseAccordionItemContext>({
    name: 'AccordionItemContext',
    hookName: 'useAccordionItemContext',
    providerName: '<AccordionItemProvider />',
  })
