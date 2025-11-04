import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context'

export interface DatePickerViewTriggerBaseProps extends PolymorphicProps {}
export interface DatePickerViewTriggerProps
  extends ComponentProps<'button'>,
    DatePickerViewTriggerBaseProps {}

export const DatePickerViewTrigger = (props: DatePickerViewTriggerProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const viewProps = useDatePickerViewPropsContext()
  const mergedProps = mergeProps(datePicker.getViewTriggerProps(viewProps), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
