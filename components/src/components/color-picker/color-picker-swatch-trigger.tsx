import type { SwatchTriggerProps } from '@zag-js/color-picker'
import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import type { Assign } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerSwatchTriggerBaseProps extends SwatchTriggerProps, PolymorphicProps {}
export interface ColorPickerSwatchTriggerProps extends Assign<HTMLProps<'button'>, ColorPickerSwatchTriggerBaseProps> {}

export const ColorPickerSwatchTrigger = forwardRef<HTMLButtonElement, ColorPickerSwatchTriggerProps>((props, ref) => {
  const [triggerProps, localProps] = createSplitProps<SwatchTriggerProps>()(props, ['value', 'disabled'])
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getSwatchTriggerProps(triggerProps), localProps)

  return <ark.button {...mergedProps} ref={ref} />
})

ColorPickerSwatchTrigger.displayName = 'ColorPickerSwatchTrigger'
