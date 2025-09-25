import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { useColorPickerContext } from './use-color-picker-context'
import { useColorPickerSwatchPropsContext } from './use-color-picker-swatch-props-context'

export interface ColorPickerSwatchIndicatorBaseProps {}
export interface ColorPickerSwatchIndicatorProps extends HTMLProps<'div'>, ColorPickerSwatchIndicatorBaseProps {}

export const ColorPickerSwatchIndicator = forwardRef<HTMLDivElement, ColorPickerSwatchIndicatorProps>((props, ref) => {
  const colorPicker = useColorPickerContext()
  const swatchProps = useColorPickerSwatchPropsContext()
  const mergedProps = mergeProps(colorPicker.getSwatchIndicatorProps(swatchProps), props)

  return <arkSimple.div {...mergedProps} ref={ref} />
})

ColorPickerSwatchIndicator.displayName = 'ColorPickerSwatchIndicator'
