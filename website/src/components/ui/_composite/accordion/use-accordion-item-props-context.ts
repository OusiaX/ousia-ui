import { createContext } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/accordion'

export interface UseAccordionItemPropsContext extends ItemProps {}

export const [AccordionItemPropsProvider, useAccordionItemPropsContext] = createContext<ItemProps>({
  name: 'AccordionItemPropsContext',
  hookName: 'useAccordionItemPropsContext',
  providerName: '<AccordionItemPropsProvider />',
})
