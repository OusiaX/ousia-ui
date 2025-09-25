import { createContext } from '@ousia-ui/ark/utils'
import type { UseTabsReturn } from './use-tabs'

export interface UseTabsContext extends UseTabsReturn {}

export const [TabsProvider, useTabsContext] = createContext<UseTabsContext>({
  name: 'TabsContext',
  hookName: 'useTabsContext',
  providerName: '<TabsProvider />',
})
