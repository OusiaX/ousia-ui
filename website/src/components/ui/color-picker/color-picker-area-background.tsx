import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useColorPickerAreaPropsContext } from './use-color-picker-area-props-context'
import { useColorPickerContext } from './use-color-picker-context'

export const ColorPickerAreaBackgroundElement = 'div' as const
export interface ColorPickerAreaBackgroundProps
  extends ComponentProps<typeof ColorPickerAreaBackgroundElement>,
    PolymorphicProps {}

export const ColorPickerAreaBackground = (props: ColorPickerAreaBackgroundProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const areaProps = useColorPickerAreaPropsContext()
  const mergedProps = mergeProps(colorPicker.getAreaBackgroundProps(areaProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
