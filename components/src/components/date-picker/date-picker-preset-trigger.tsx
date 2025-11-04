import { type Assign, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { PresetTriggerProps } from '@zag-js/date-picker'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'

export interface DatePickerPresetTriggerBaseProps extends PresetTriggerProps, PolymorphicProps {}
export interface DatePickerPresetTriggerProps
  extends Assign<ComponentProps<'button'>, DatePickerPresetTriggerBaseProps> {}

export const DatePickerPresetTrigger = (props: DatePickerPresetTriggerProps) => {
  const { ref, ...restProps } = props
  const [presetTriggerProps, localProps] = createSplitProps<PresetTriggerProps>()(restProps, [
    'value',
  ])
  const datePicker = useDatePickerContext()
  const mergedProps = mergeProps(datePicker.getPresetTriggerProps(presetTriggerProps), localProps)

  return <ark.button {...mergedProps} ref={ref} />
}
