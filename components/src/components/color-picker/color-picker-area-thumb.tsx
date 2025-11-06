import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useColorPickerAreaPropsContext } from './use-color-picker-area-props-context'
import { useColorPickerContext } from './use-color-picker-context'

export const ColorPickerAreaThumbElement = 'div' as const
export interface ColorPickerAreaThumbProps
  extends ComponentProps<typeof ColorPickerAreaThumbElement>,
    PolymorphicProps {}

export const ColorPickerAreaThumb = (props: ColorPickerAreaThumbProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const areaProps = useColorPickerAreaPropsContext()
  const mergedProps = mergeProps(colorPicker.getAreaThumbProps(areaProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
