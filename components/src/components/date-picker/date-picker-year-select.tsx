import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'

export interface DatePickerYearSelectBaseProps extends PolymorphicProps {}
export interface DatePickerYearSelectProps
  extends ComponentProps<'select'>,
    DatePickerYearSelectBaseProps {}

export const DatePickerYearSelect = (props: DatePickerYearSelectProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const mergedProps = mergeProps(datePicker.getYearSelectProps(), restProps)

  return (
    <ark.select {...mergedProps} ref={ref}>
      {datePicker.getYears().map((year, i) => (
        <option key={i} value={year.value}>
          {year.label}
        </option>
      ))}
    </ark.select>
  )
}
