import { createContext } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/select'

export const [SelectItemPropsProvider, useSelectItemPropsContext] = createContext<ItemProps>({
  name: 'SelectItemPropsContext',
  hookName: 'useSelectItemPropsContext',
  providerName: '<SelectItemPropsProvider />',
})
