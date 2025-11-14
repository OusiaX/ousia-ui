import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { TableProps } from '@zag-js/date-picker'
import { type ComponentProps, useId } from 'react'
import { useDatePickerContext } from './use-date-picker-context'
import { DatePickerTablePropsProvider } from './use-date-picker-table-props-context'
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context'

export const DatePickerTableElement = 'table' as const
export interface DatePickerTableProps
  extends ComponentProps<typeof DatePickerTableElement>,
    Pick<TableProps, 'columns'>,
    PolymorphicProps {}

export const DatePickerTable = (props: DatePickerTableProps) => {
  const { ref, ...restProps } = props
  const [{ columns }, localProps] = createSplitProps<Pick<TableProps, 'columns'>>()(restProps, [
    'columns',
  ])
  const datePicker = useDatePickerContext()
  const viewProps = useDatePickerViewPropsContext()
  const tableProps = { columns, id: useId(), ...viewProps }
  const mergedProps = mergeProps(datePicker.getTableProps(tableProps), localProps)

  return (
    <DatePickerTablePropsProvider value={tableProps}>
      <ark.table {...mergedProps} ref={ref} />
    </DatePickerTablePropsProvider>
  )
}
