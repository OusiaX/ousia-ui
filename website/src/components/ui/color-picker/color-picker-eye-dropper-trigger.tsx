import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export const ColorPickerEyeDropperTriggerElement = 'button' as const
export interface ColorPickerEyeDropperTriggerProps
  extends ComponentProps<typeof ColorPickerEyeDropperTriggerElement>,
    PolymorphicProps {}

export const ColorPickerEyeDropperTrigger = (props: ColorPickerEyeDropperTriggerProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getEyeDropperTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
