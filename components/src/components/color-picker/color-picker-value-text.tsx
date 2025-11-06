import { ark, mergeProps } from '@ousia-ui/ark'
import type { ColorStringFormat } from '@zag-js/color-utils'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export const ColorPickerValueTextElement = 'span' as const
export interface ColorPickerValueTextProps
  extends ComponentProps<typeof ColorPickerValueTextElement> {
  format?: ColorStringFormat | undefined
}

export const ColorPickerValueText = (props: ColorPickerValueTextProps) => {
  const { ref, children, format, ...localProps } = props
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getValueTextProps(), localProps)
  const valueAsString = format ? colorPicker.value.toString(format) : colorPicker.valueAsString

  return (
    <ark.span {...mergedProps} ref={ref}>
      {children || valueAsString}
    </ark.span>
  )
}
