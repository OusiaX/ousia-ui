import type { ItemBaseProps } from '@zag-js/menu'
import { createContext } from '@ousia-ui/ark/utils'

export const [MenuItemPropsProvider, useMenuItemPropsContext] = createContext<ItemBaseProps>({
  name: 'MenuItemPropsContext',
  hookName: 'useMenuItemPropsContext',
  providerName: '<MenuItemPropsProvider />',
})
