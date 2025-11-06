import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { SwatchProps } from '@zag-js/color-picker'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'
import { ColorPickerSwatchPropsProvider } from './use-color-picker-swatch-props-context'

export const ColorPickerSwatchElement = 'div' as const
export interface ColorPickerSwatchProps
  extends ComponentProps<typeof ColorPickerSwatchElement>,
    SwatchProps,
    PolymorphicProps {}

export const ColorPickerSwatch = (props: ColorPickerSwatchProps) => {
  const { ref, ...restProps } = props
  const [swatwchProps, localProps] = createSplitProps<SwatchProps>()(restProps, [
    'respectAlpha',
    'value',
  ])
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getSwatchProps(swatwchProps), localProps)

  return (
    <ColorPickerSwatchPropsProvider value={swatwchProps}>
      <ark.div {...mergedProps} ref={ref} />
    </ColorPickerSwatchPropsProvider>
  )
}
