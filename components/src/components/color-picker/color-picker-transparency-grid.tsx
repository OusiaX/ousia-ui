import { ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { TransparencyGridProps } from '@zag-js/color-picker'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerTransparencyGridBaseProps extends TransparencyGridProps {}
export interface ColorPickerTransparencyGridProps
  extends ComponentProps<'div'>,
    ColorPickerTransparencyGridBaseProps {}

export const ColorPickerTransparencyGrid = (props: ColorPickerTransparencyGridProps) => {
  const { ref, ...restProps } = props
  const [gridProps, localProps] = createSplitProps<TransparencyGridProps>()(restProps, ['size'])
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getTransparencyGridProps(gridProps), localProps)

  return <ark.div {...mergedProps} ref={ref} />
}
