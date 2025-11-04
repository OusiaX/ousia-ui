import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { SwatchProps } from '@zag-js/color-picker'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'
import { ColorPickerSwatchPropsProvider } from './use-color-picker-swatch-props-context'

interface ValueSwatchProps extends Omit<SwatchProps, 'value'> {}

export interface ColorPickerValueSwatchBaseProps extends ValueSwatchProps, PolymorphicProps {}
export interface ColorPickerValueSwatchProps
  extends ComponentProps<'div'>,
    ColorPickerValueSwatchBaseProps {}

export const ColorPickerValueSwatch = (props: ColorPickerValueSwatchProps) => {
  const { ref, ...restProps } = props
  const [{ respectAlpha }, localProps] = createSplitProps<ValueSwatchProps>()(restProps, [
    'respectAlpha',
  ])
  const colorPicker = useColorPickerContext()
  const swatchProps = {
    respectAlpha,
    value: colorPicker.valueAsString,
  }
  const mergedProps = mergeProps(colorPicker.getSwatchProps(swatchProps), localProps)

  return (
    <ColorPickerSwatchPropsProvider value={swatchProps}>
      <ark.div {...mergedProps} ref={ref} />
    </ColorPickerSwatchPropsProvider>
  )
}
