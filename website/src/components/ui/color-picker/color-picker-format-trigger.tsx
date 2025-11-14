import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export const ColorPickerFormatTriggerElement = 'button' as const
export interface ColorPickerFormatTriggerProps
  extends ComponentProps<typeof ColorPickerFormatTriggerElement>,
    PolymorphicProps {}

export const ColorPickerFormatTrigger = (props: ColorPickerFormatTriggerProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getFormatTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
