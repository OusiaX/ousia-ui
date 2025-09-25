import type { ItemProps } from '@zag-js/accordion'
import { createContext } from '@ousia-ui/ark/utils'

export interface UseAccordionItemPropsContext extends ItemProps {}

export const [AccordionItemPropsProvider, useAccordionItemPropsContext] = createContext<ItemProps>({
  name: 'AccordionItemPropsContext',
  hookName: 'useAccordionItemPropsContext',
  providerName: '<AccordionItemPropsProvider />',
})
