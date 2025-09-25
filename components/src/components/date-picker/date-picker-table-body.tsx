import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import { useDatePickerContext } from './use-date-picker-context'
import { useDatePickerTablePropsContext } from './use-date-picker-table-props-context'

export interface DatePickerTableBodyBaseProps extends PolymorphicProps {}
export interface DatePickerTableBodyProps extends HTMLProps<'tbody'>, DatePickerTableBodyBaseProps {}

export const DatePickerTableBody = forwardRef<HTMLTableSectionElement, DatePickerTableBodyProps>((props, ref) => {
  const datePicker = useDatePickerContext()
  const tableProps = useDatePickerTablePropsContext()
  const mergedProps = mergeProps(datePicker.getTableBodyProps(tableProps), props)

  return <arkMemo.tbody {...mergedProps} ref={ref} />
})

DatePickerTableBody.displayName = 'DatePickerTableBody'
