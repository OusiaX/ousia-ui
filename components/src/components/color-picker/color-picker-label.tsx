import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerLabelBaseProps {}
export interface ColorPickerLabelProps extends HTMLProps<'label'>, ColorPickerLabelBaseProps {}

export const ColorPickerLabel = forwardRef<HTMLLabelElement, ColorPickerLabelProps>((props, ref) => {
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getLabelProps(), props)

  return <arkSimple.label {...mergedProps} ref={ref} />
})

ColorPickerLabel.displayName = 'ColorPickerLabel'
