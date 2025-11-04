import { type HTMLProps, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { Ref } from 'react'
import { useDatePickerContext } from './use-date-picker-context'
import { useDatePickerTablePropsContext } from './use-date-picker-table-props-context'

export interface DatePickerTableBodyBaseProps extends PolymorphicProps {}
export interface DatePickerTableBodyProps
  extends HTMLProps<'tbody'>,
    DatePickerTableBodyBaseProps {}

export const DatePickerTableBody = (
  props: DatePickerTableBodyProps & { ref?: Ref<HTMLTableSectionElement> },
) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const tableProps = useDatePickerTablePropsContext()
  const mergedProps = mergeProps(datePicker.getTableBodyProps(tableProps), restProps)

  return <ark.tbody {...mergedProps} ref={ref} />
}
