import { type PolymorphicProps, ark } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ColorFormat } from '@zag-js/color-picker'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'
import { ColorPickerFormatPropsProvider } from './use-color-picker-format-context'

interface FormatOptions {
  format: ColorFormat
}

export const ColorPickerViewElement = 'div' as const
export interface ColorPickerViewProps
  extends ComponentProps<typeof ColorPickerViewElement>,
    FormatOptions,
    PolymorphicProps {}

export const ColorPickerView = (props: ColorPickerViewProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const [formatProps, localProps] = createSplitProps<FormatOptions>()(restProps, ['format'])

  if (colorPicker.format !== formatProps.format) {
    return null
  }

  return (
    <ColorPickerFormatPropsProvider value={formatProps}>
      <ark.div
        ref={ref}
        data-scope="color-picker"
        data-part="view"
        data-format={formatProps.format}
        {...localProps}
      />
    </ColorPickerFormatPropsProvider>
  )
}
