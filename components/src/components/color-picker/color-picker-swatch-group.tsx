import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerSwatchGroupBaseProps {}
export interface ColorPickerSwatchGroupProps extends HTMLProps<'div'>, ColorPickerSwatchGroupBaseProps {}

export const ColorPickerSwatchGroup = forwardRef<HTMLDivElement, ColorPickerSwatchGroupProps>((props, ref) => {
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getSwatchGroupProps(), props)

  return <arkSimple.div {...mergedProps} ref={ref} />
})

ColorPickerSwatchGroup.displayName = 'ColorPickerSwatchGroup'
