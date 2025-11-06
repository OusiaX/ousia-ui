import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export const ColorPickerSwatchGroupElement = 'div' as const
export interface ColorPickerSwatchGroupProps
  extends ComponentProps<typeof ColorPickerSwatchGroupElement>,
    PolymorphicProps {}

export const ColorPickerSwatchGroup = (props: ColorPickerSwatchGroupProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getSwatchGroupProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
