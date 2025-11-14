import type { Optional } from '@ousia-ui/ark'
import { createContext } from '@ousia-ui/ark/utils'
import type { OptionItemState } from '@zag-js/menu'

export interface UseMenuItemContext extends Optional<OptionItemState, 'checked'> {}

export const [MenuItemProvider, useMenuItemContext] = createContext<UseMenuItemContext>({
  name: 'MenuItemContext',
  hookName: 'useMenuItemContext',
  providerName: '<MenuItemProvider />',
})
