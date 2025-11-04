import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'
import { useColorPickerSwatchPropsContext } from './use-color-picker-swatch-props-context'

export interface ColorPickerSwatchIndicatorProps extends ComponentProps<'div'>, PolymorphicProps {}

export const ColorPickerSwatchIndicator = (props: ColorPickerSwatchIndicatorProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const swatchProps = useColorPickerSwatchPropsContext()
  const mergedProps = mergeProps(colorPicker.getSwatchIndicatorProps(swatchProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
