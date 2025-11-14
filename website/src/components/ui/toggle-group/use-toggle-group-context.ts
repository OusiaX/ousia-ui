import { createContext } from '@ousia-ui/ark/utils'
import type { UseToggleGroupReturn } from './use-toggle-group'

export interface UseToggleGroupContext extends UseToggleGroupReturn {}

export const [ToggleGroupProvider, useToggleGroupContext] = createContext<UseToggleGroupContext>({
  name: 'ToggleGroupContext',
  hookName: 'useToggleGroupContext',
  providerName: '<ToggleGroupProvider />',
})
