import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context'

export interface DatePickerViewControlBaseProps extends PolymorphicProps {}
export interface DatePickerViewControlProps
  extends ComponentProps<'div'>,
    DatePickerViewControlBaseProps {}

export const DatePickerViewControl = (props: DatePickerViewControlProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const viewProps = useDatePickerViewPropsContext()
  const mergedProps = mergeProps(datePicker.getViewControlProps(viewProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
