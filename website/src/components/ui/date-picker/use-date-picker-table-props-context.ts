import { createContext } from '@ousia-ui/ark/utils'
import type { TableProps } from '@zag-js/date-picker'

export interface UseDatePickerTablePropsContext extends TableProps {}

export const [DatePickerTablePropsProvider, useDatePickerTablePropsContext] =
  createContext<UseDatePickerTablePropsContext>({
    name: 'DatePickerTableContext',
    hookName: 'useDatePickerTableContext',
    providerName: '<DatePickerTableProvider />',
  })
