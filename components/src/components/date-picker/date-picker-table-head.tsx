import { type HTMLProps, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { Ref } from 'react'
import { useDatePickerContext } from './use-date-picker-context'
import { useDatePickerTablePropsContext } from './use-date-picker-table-props-context'

export interface DatePickerTableHeadBaseProps extends PolymorphicProps {}
export interface DatePickerTableHeadProps
  extends HTMLProps<'thead'>,
    DatePickerTableHeadBaseProps {}

export const DatePickerTableHead = (
  props: DatePickerTableHeadProps & { ref?: Ref<HTMLTableSectionElement> },
) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const tableProps = useDatePickerTablePropsContext()
  const mergedProps = mergeProps(datePicker.getTableHeadProps(tableProps), restProps)

  return <ark.thead {...mergedProps} ref={ref} />
}
