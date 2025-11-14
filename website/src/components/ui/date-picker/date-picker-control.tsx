import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'

export const DatePickerControlElement = 'div' as const
export interface DatePickerControlProps
  extends ComponentProps<typeof DatePickerControlElement>,
    PolymorphicProps {}

export const DatePickerControl = (props: DatePickerControlProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const mergedProps = mergeProps(datePicker.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
