import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'
import { useDatePickerTableCellPropsContext } from './use-date-picker-table-cell-props-context'
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context'

export interface DatePickerTableCellTriggerProps extends ComponentProps<'div'>, PolymorphicProps {}

export const DatePickerTableCellTrigger = (props: DatePickerTableCellTriggerProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const tableCellProps = useDatePickerTableCellPropsContext()
  const viewProps = useDatePickerViewPropsContext()

  const viewMap = {
    day: datePicker.getDayTableCellTriggerProps,
    month: datePicker.getMonthTableCellTriggerProps,
    year: datePicker.getYearTableCellTriggerProps,
  }

  const viewFn = viewMap[viewProps.view]

  // @ts-expect-error fix later
  const triggerProps = viewFn(tableCellProps)

  const mergedProps = mergeProps(triggerProps, restProps)

  return <ark.div ref={ref} {...mergedProps} />
}
