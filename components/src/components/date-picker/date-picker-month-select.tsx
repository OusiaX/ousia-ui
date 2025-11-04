import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'

export interface DatePickerMonthSelectProps extends ComponentProps<'select'>, PolymorphicProps {}

export const DatePickerMonthSelect = (props: DatePickerMonthSelectProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const mergedProps = mergeProps(datePicker.getMonthSelectProps(), restProps)

  return (
    <ark.select {...mergedProps} ref={ref}>
      {datePicker.getMonths().map((month, i) => (
        <option key={i} value={month.value}>
          {month.label}
        </option>
      ))}
    </ark.select>
  )
}
