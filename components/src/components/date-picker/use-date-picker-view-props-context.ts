import type { ViewProps } from '@zag-js/date-picker'
import { createContext } from '@ousia-ui/ark/utils'

export interface UseDatePickerViewContext extends Required<ViewProps> {}

export const [DatePickerViewPropsProvider, useDatePickerViewPropsContext] = createContext<UseDatePickerViewContext>({
  name: 'DatePickerViewContext',
  hookName: 'useDatePickerViewContext',
  providerName: '<DatePickerViewProvider />',
  strict: false,
  defaultValue: { view: 'day' },
})
