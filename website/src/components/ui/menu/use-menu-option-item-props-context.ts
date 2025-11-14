import { createContext } from '@ousia-ui/ark/utils'
import type { ItemBaseProps } from '@zag-js/menu'

export const [MenuItemPropsProvider, useMenuItemPropsContext] = createContext<ItemBaseProps>({
  name: 'MenuItemPropsContext',
  hookName: 'useMenuItemPropsContext',
  providerName: '<MenuItemPropsProvider />',
})
