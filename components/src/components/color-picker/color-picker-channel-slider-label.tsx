import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useColorPickerChannelPropsContext } from './use-color-picker-channel-props-context'
import { useColorPickerContext } from './use-color-picker-context'

export const ColorPickerChannelSliderLabelElement = 'label' as const
export interface ColorPickerChannelSliderLabelProps
  extends ComponentProps<typeof ColorPickerChannelSliderLabelElement>,
    PolymorphicProps {}

export const ColorPickerChannelSliderLabel = (props: ColorPickerChannelSliderLabelProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const channelProps = useColorPickerChannelPropsContext()
  const mergedProps = mergeProps(colorPicker.getChannelSliderLabelProps(channelProps), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
