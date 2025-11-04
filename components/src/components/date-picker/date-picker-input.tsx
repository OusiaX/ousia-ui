import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { InputProps } from '@zag-js/date-picker'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'

export interface DatePickerInputBaseProps extends InputProps, PolymorphicProps {}
export interface DatePickerInputProps extends ComponentProps<'input'>, DatePickerInputBaseProps {}

export const DatePickerInput = (props: DatePickerInputProps) => {
  const { ref, ...restProps } = props
  const [inputProps, localProps] = createSplitProps<InputProps>()(restProps, ['index', 'fixOnBlur'])
  const datePicker = useDatePickerContext()
  const mergedProps = mergeProps(datePicker.getInputProps(inputProps), localProps)

  return <ark.input {...mergedProps} ref={ref} />
}
