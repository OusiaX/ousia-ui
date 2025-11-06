import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context'

export const DatePickerPrevTriggerElement = 'button' as const
export interface DatePickerPrevTriggerProps
  extends ComponentProps<typeof DatePickerPrevTriggerElement>,
    PolymorphicProps {}

export const DatePickerPrevTrigger = (props: DatePickerPrevTriggerProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const viewProps = useDatePickerViewPropsContext()
  const mergedProps = mergeProps(datePicker.getPrevTriggerProps(viewProps), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
