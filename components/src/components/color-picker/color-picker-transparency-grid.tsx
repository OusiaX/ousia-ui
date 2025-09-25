import type { TransparencyGridProps } from '@zag-js/color-picker'
import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerTransparencyGridBaseProps extends TransparencyGridProps {}
export interface ColorPickerTransparencyGridProps extends HTMLProps<'div'>, ColorPickerTransparencyGridBaseProps {}

export const ColorPickerTransparencyGrid = forwardRef<HTMLDivElement, ColorPickerTransparencyGridProps>(
  (props, ref) => {
    const [gridProps, localProps] = createSplitProps<TransparencyGridProps>()(props, ['size'])
    const colorPicker = useColorPickerContext()
    const mergedProps = mergeProps(colorPicker.getTransparencyGridProps(gridProps), localProps)

    return <arkSimple.div {...mergedProps} ref={ref} />
  },
)

ColorPickerTransparencyGrid.displayName = 'ColorPickerTransparencyGrid'
