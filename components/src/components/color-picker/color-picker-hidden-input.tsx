import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerHiddenInputProps extends ComponentProps<'input'>, PolymorphicProps {}

export const ColorPickerHiddenInput = (props: ColorPickerHiddenInputProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getHiddenInputProps(), restProps)
  const field = useFieldContext()

  return <ark.input aria-describedby={field?.ariaDescribedby} {...mergedProps} ref={ref} />
}
