import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export const ColorPickerControlElement = 'div' as const
export interface ColorPickerControlProps
  extends ComponentProps<typeof ColorPickerControlElement>,
    PolymorphicProps {}

export const ColorPickerControl = (props: ColorPickerControlProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
