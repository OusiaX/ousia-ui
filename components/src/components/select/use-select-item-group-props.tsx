import type { ItemGroupProps } from '@zag-js/select'
import { createContext } from '@ousia-ui/ark/utils'

export interface UseSelectItemGroupPropsContext extends ItemGroupProps {}

export const [SelectItemGroupPropsProvider, useSelectItemGroupPropsContext] = createContext<ItemGroupProps>({
  name: 'SelectItemGroupPropsContext',
  hookName: 'useSelectItemGroupPropsContext',
  providerName: '<SelectItemGroupPropsProvider />',
})
