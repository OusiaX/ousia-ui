import type { ColorFormat } from '@zag-js/color-picker'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { useColorPickerContext } from './use-color-picker-context'
import { ColorPickerFormatPropsProvider } from './use-color-picker-format-context'

interface FormatOptions {
  format: ColorFormat
}

export interface ColorPickerViewBaseProps extends FormatOptions, PolymorphicProps {}
export interface ColorPickerViewProps extends HTMLProps<'div'>, ColorPickerViewBaseProps {}

export const ColorPickerView = forwardRef<HTMLDivElement, ColorPickerViewProps>((props, ref) => {
  const colorPicker = useColorPickerContext()
  const [formatProps, restProps] = createSplitProps<FormatOptions>()(props, ['format'])

  if (colorPicker.format !== formatProps.format) {
    return null
  }

  return (
    <ColorPickerFormatPropsProvider value={formatProps}>
      <ark.div ref={ref} data-scope="color-picker" data-part="view" data-format={props.format} {...restProps} />
    </ColorPickerFormatPropsProvider>
  )
})

ColorPickerView.displayName = 'ColorPickerView'
