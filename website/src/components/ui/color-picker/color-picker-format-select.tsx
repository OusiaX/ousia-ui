import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export const ColorPickerFormatSelectElement = 'select' as const
export interface ColorPickerFormatSelectProps
  extends ComponentProps<typeof ColorPickerFormatSelectElement>,
    PolymorphicProps {}

export const ColorPickerFormatSelect = (props: ColorPickerFormatSelectProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getFormatSelectProps(), restProps)

  return (
    <ark.select {...mergedProps} ref={ref}>
      {['rgba', 'hsla', 'hsba'].map((format) => (
        <ark.option key={format} value={format}>
          {format}
        </ark.option>
      ))}
    </ark.select>
  )
}
