import { type Assign, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { SwatchTriggerProps } from '@zag-js/color-picker'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerSwatchTriggerBaseProps extends SwatchTriggerProps, PolymorphicProps {}
export interface ColorPickerSwatchTriggerProps
  extends Assign<ComponentProps<'button'>, ColorPickerSwatchTriggerBaseProps> {}

export const ColorPickerSwatchTrigger = (props: ColorPickerSwatchTriggerProps) => {
  const { ref, ...restProps } = props
  const [triggerProps, localProps] = createSplitProps<SwatchTriggerProps>()(restProps, [
    'value',
    'disabled',
  ])
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getSwatchTriggerProps(triggerProps), localProps)

  return <ark.button {...mergedProps} ref={ref} />
}
