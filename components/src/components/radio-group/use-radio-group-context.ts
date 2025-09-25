import { createContext } from '@ousia-ui/ark/utils'
import type { UseRadioGroupReturn } from './use-radio-group'

export interface UseRadioGroupContext extends UseRadioGroupReturn {}

export const [RadioGroupProvider, useRadioGroupContext] = createContext<UseRadioGroupContext>({
  name: 'RadioGroupContext',
  hookName: 'useRadioGroupContext',
  providerName: '<RadioGroupProvider />',
})
