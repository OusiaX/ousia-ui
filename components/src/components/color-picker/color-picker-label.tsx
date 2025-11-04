import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerLabelBaseProps extends PolymorphicProps {}
export interface ColorPickerLabelProps extends ComponentProps<'label'>, ColorPickerLabelBaseProps {}

export const ColorPickerLabel = (props: ColorPickerLabelProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
