import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { AreaProps } from '@zag-js/color-picker'
import type { ComponentProps } from 'react'
import { ColorPickerAreaPropsProvider } from './use-color-picker-area-props-context'
import { useColorPickerContext } from './use-color-picker-context'

export const ColorPickerAreaElement = 'div' as const
export interface ColorPickerAreaProps
  extends ComponentProps<typeof ColorPickerAreaElement>,
    AreaProps,
    PolymorphicProps {}

export const ColorPickerArea = (props: ColorPickerAreaProps) => {
  const { ref, ...restProps } = props
  const [areaProps, localProps] = createSplitProps<AreaProps>()(restProps, ['xChannel', 'yChannel'])
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getAreaProps(areaProps), localProps)

  return (
    <ColorPickerAreaPropsProvider value={areaProps}>
      <ark.div {...mergedProps} ref={ref} />
    </ColorPickerAreaPropsProvider>
  )
}
