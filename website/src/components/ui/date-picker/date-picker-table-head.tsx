import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'
import { useDatePickerTablePropsContext } from './use-date-picker-table-props-context'

export const DatePickerTableHeadElement = 'thead' as const
export interface DatePickerTableHeadProps
  extends ComponentProps<typeof DatePickerTableHeadElement>,
    PolymorphicProps {}

export const DatePickerTableHead = (props: DatePickerTableHeadProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const tableProps = useDatePickerTablePropsContext()
  const mergedProps = mergeProps(datePicker.getTableHeadProps(tableProps), restProps)

  return <ark.thead {...mergedProps} ref={ref} />
}
