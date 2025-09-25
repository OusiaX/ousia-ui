import type { ColorStringFormat } from '@zag-js/color-utils'
import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerValueTextBaseProps {
  format?: ColorStringFormat | undefined
}
export interface ColorPickerValueTextProps extends HTMLProps<'span'>, ColorPickerValueTextBaseProps {}

export const ColorPickerValueText = forwardRef<HTMLDivElement, ColorPickerValueTextProps>((props, ref) => {
  const { children, format, ...localProps } = props
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getValueTextProps(), localProps)
  const valueAsString = format ? colorPicker.value.toString(format) : colorPicker.valueAsString

  return (
    <arkSimple.span {...mergedProps} ref={ref}>
      {children || valueAsString}
    </arkSimple.span>
  )
})

ColorPickerValueText.displayName = 'ColorPickerValueText'
