import { createContext } from '@ousia-ui/ark/utils'
import type { UseProgressReturn } from './use-progress'

export interface UseProgressContext extends UseProgressReturn {}

export const [ProgressProvider, useProgressContext] = createContext<UseProgressContext>({
  name: 'ProgressContext',
  hookName: 'useProgressContext',
  providerName: '<ProgressProvider />',
})
