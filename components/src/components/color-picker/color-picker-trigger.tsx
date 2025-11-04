import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerTriggerBaseProps extends PolymorphicProps {}
export interface ColorPickerTriggerProps
  extends ComponentProps<'button'>,
    ColorPickerTriggerBaseProps {}

export const ColorPickerTrigger = (props: ColorPickerTriggerProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
