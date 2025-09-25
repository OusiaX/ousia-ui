import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerFormatTriggerBaseProps extends PolymorphicProps {}
export interface ColorPickerFormatTriggerProps extends HTMLProps<'button'>, ColorPickerFormatTriggerBaseProps {}

export const ColorPickerFormatTrigger = forwardRef<HTMLButtonElement, ColorPickerFormatTriggerProps>((props, ref) => {
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getFormatTriggerProps(), props)

  return <ark.button {...mergedProps} ref={ref} />
})

ColorPickerFormatTrigger.displayName = 'ColorPickerFormatTrigger'
