import type { TableProps } from '@zag-js/date-picker'
import { mergeProps } from '@zag-js/react'
import { forwardRef, useId } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import { useDatePickerContext } from './use-date-picker-context'
import { DatePickerTablePropsProvider } from './use-date-picker-table-props-context'
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context'

export interface DatePickerTableBaseProps extends Pick<TableProps, 'columns'>, PolymorphicProps {}
export interface DatePickerTableProps extends HTMLProps<'table'>, DatePickerTableBaseProps {}

export const DatePickerTable = forwardRef<HTMLTableElement, DatePickerTableProps>((props, ref) => {
  const [{ columns }, localProps] = createSplitProps<Pick<TableProps, 'columns'>>()(props, ['columns'])
  const datePicker = useDatePickerContext()
  const viewProps = useDatePickerViewPropsContext()
  const tableProps = { columns, id: useId(), ...viewProps }
  const mergedProps = mergeProps(datePicker.getTableProps(tableProps), localProps)

  return (
    <DatePickerTablePropsProvider value={tableProps}>
      <arkMemo.table {...mergedProps} ref={ref} />
    </DatePickerTablePropsProvider>
  )
})

DatePickerTable.displayName = 'DatePickerTable'
