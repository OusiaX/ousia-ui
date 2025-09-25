import type { PresetTriggerProps } from '@zag-js/date-picker'
import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import type { Assign, HTMLProps, PolymorphicProps } from '@ousia-ui/ark'
import { ark } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { useDatePickerContext } from './use-date-picker-context'

export interface DatePickerPresetTriggerBaseProps extends PresetTriggerProps, PolymorphicProps {}
export interface DatePickerPresetTriggerProps extends Assign<HTMLProps<'button'>, DatePickerPresetTriggerBaseProps> {}

export const DatePickerPresetTrigger = forwardRef<HTMLButtonElement, DatePickerPresetTriggerProps>((props, ref) => {
  const [presetTriggerProps, localProps] = createSplitProps<PresetTriggerProps>()(props, ['value'])
  const datePicker = useDatePickerContext()
  const mergedProps = mergeProps(datePicker.getPresetTriggerProps(presetTriggerProps), localProps)

  return <ark.button {...mergedProps} ref={ref} />
})

DatePickerPresetTrigger.displayName = 'DatePickerPresetTrigger'
