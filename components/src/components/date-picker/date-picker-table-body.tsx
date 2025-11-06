import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'
import { useDatePickerTablePropsContext } from './use-date-picker-table-props-context'

export const DatePickerTableBodyElement = 'tbody' as const
export interface DatePickerTableBodyProps
  extends ComponentProps<typeof DatePickerTableBodyElement>,
    PolymorphicProps {}

export const DatePickerTableBody = (props: DatePickerTableBodyProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const tableProps = useDatePickerTablePropsContext()
  const mergedProps = mergeProps(datePicker.getTableBodyProps(tableProps), restProps)

  return <ark.tbody {...mergedProps} ref={ref} />
}
