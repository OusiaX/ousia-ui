import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'
import { useDatePickerTablePropsContext } from './use-date-picker-table-props-context'

export const DatePickerTableRowElement = 'tr' as const
export interface DatePickerTableRowProps
  extends ComponentProps<typeof DatePickerTableRowElement>,
    PolymorphicProps {}

export const DatePickerTableRow = (props: DatePickerTableRowProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const tableProps = useDatePickerTablePropsContext()
  const mergedProps = mergeProps(datePicker.getTableRowProps(tableProps), restProps)

  return <ark.tr {...mergedProps} ref={ref} />
}
