import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerFormatTriggerBaseProps extends PolymorphicProps {}
export interface ColorPickerFormatTriggerProps
  extends ComponentProps<'button'>,
    ColorPickerFormatTriggerBaseProps {}

export const ColorPickerFormatTrigger = (props: ColorPickerFormatTriggerProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getFormatTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
