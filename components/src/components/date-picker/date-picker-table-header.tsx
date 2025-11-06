import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'
import { useDatePickerTablePropsContext } from './use-date-picker-table-props-context'

export const DatePickerTableHeaderElement = 'th' as const
export interface DatePickerTableHeaderProps
  extends ComponentProps<typeof DatePickerTableHeaderElement>,
    PolymorphicProps {}

export const DatePickerTableHeader = (props: DatePickerTableHeaderProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const tableProps = useDatePickerTablePropsContext()
  const mergedProps = mergeProps(datePicker.getTableHeaderProps(tableProps), restProps)

  return <ark.th {...mergedProps} ref={ref} />
}
