import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'

export interface DatePickerTriggerProps extends ComponentProps<'button'>, PolymorphicProps {}

export const DatePickerTrigger = (props: DatePickerTriggerProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const mergedProps = mergeProps(datePicker.getTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
