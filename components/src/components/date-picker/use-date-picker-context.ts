import { createContext } from '@ousia-ui/ark/utils'
import type { UseDatePickerReturn } from './use-date-picker'

export interface UseDatePickerContext extends UseDatePickerReturn {}

export const [DatePickerProvider, useDatePickerContext] = createContext<UseDatePickerContext>({
  name: 'DatePickerContext',
  hookName: 'useDatePickerContext',
  providerName: '<DatePickerProvider />',
})
