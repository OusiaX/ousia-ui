import { createContext } from '@ousia-ui/ark/utils'
import type { UseTooltipReturn } from './use-tooltip'

export interface UseTooltipContext extends UseTooltipReturn {}

export const [TooltipProvider, useTooltipContext] = createContext<UseTooltipContext>({
  name: 'TooltipContext',
  hookName: 'useTooltipContext',
  providerName: '<TooltipProvider />',
})
