import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context'

export interface DatePickerNextTriggerBaseProps extends PolymorphicProps {}
export interface DatePickerNextTriggerProps
  extends ComponentProps<'button'>,
    DatePickerNextTriggerBaseProps {}

export const DatePickerNextTrigger = (props: DatePickerNextTriggerProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const viewProps = useDatePickerViewPropsContext()
  const mergedProps = mergeProps(datePicker.getNextTriggerProps(viewProps), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
