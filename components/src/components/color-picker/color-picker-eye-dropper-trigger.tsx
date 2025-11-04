import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerEyeDropperTriggerProps
  extends ComponentProps<'button'>,
    PolymorphicProps {}

export const ColorPickerEyeDropperTrigger = (props: ColorPickerEyeDropperTriggerProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getEyeDropperTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
