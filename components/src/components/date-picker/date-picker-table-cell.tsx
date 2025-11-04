import { type HTMLProps, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { Ref } from 'react'
import { useDatePickerContext } from './use-date-picker-context'
import {
  DatePickerTableCellPropsProvider,
  type UseDatePickerTableCellPropsContext,
} from './use-date-picker-table-cell-props-context'
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context'

export interface DatePickerTableCellBaseProps
  extends UseDatePickerTableCellPropsContext,
    PolymorphicProps {}
export interface DatePickerTableCellProps extends HTMLProps<'td'>, DatePickerTableCellBaseProps {}

export const DatePickerTableCell = (
  props: DatePickerTableCellProps & { ref?: Ref<HTMLTableCellElement> },
) => {
  const { ref, ...restProps } = props
  const [cellProps, localProps] = createSplitProps<UseDatePickerTableCellPropsContext>()(
    restProps,
    ['disabled', 'value', 'visibleRange', 'columns'],
  )
  const datePicker = useDatePickerContext()
  const viewProps = useDatePickerViewPropsContext()
  const tableCellProps = {
    day: datePicker.getDayTableCellProps,
    month: datePicker.getMonthTableCellProps,
    year: datePicker.getYearTableCellProps,
    // @ts-expect-error value is number filter
  }[viewProps.view](cellProps)

  const mergedProps = mergeProps(tableCellProps, localProps)

  return (
    <DatePickerTableCellPropsProvider value={cellProps}>
      <ark.td ref={ref} {...mergedProps} />
    </DatePickerTableCellPropsProvider>
  )
}
