import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'

export const DatePickerLabelElement = 'label' as const
export interface DatePickerLabelProps
  extends ComponentProps<typeof DatePickerLabelElement>,
    PolymorphicProps {}

export const DatePickerLabel = (props: DatePickerLabelProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const mergedProps = mergeProps(datePicker.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
