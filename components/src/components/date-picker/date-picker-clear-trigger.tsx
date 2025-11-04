import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'

export interface DatePickerClearTriggerProps extends ComponentProps<'button'>, PolymorphicProps {}

export const DatePickerClearTrigger = (props: DatePickerClearTriggerProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const mergedProps = mergeProps(datePicker.getClearTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
