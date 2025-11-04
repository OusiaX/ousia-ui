import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useColorPickerChannelPropsContext } from './use-color-picker-channel-props-context'
import { useColorPickerContext } from './use-color-picker-context'
import { useColorPickerFormatPropsContext } from './use-color-picker-format-context'

export interface ColorPickerChannelSliderTrackBaseProps extends PolymorphicProps {}
export interface ColorPickerChannelSliderTrackProps
  extends ComponentProps<'div'>,
    ColorPickerChannelSliderTrackBaseProps {}

export const ColorPickerChannelSliderTrack = (props: ColorPickerChannelSliderTrackProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()

  const channelProps = useColorPickerChannelPropsContext()
  const formatProps = useColorPickerFormatPropsContext()
  const channelSliderProps = { ...channelProps, ...formatProps }

  const mergedProps = mergeProps(
    colorPicker.getChannelSliderTrackProps(channelSliderProps),
    restProps,
  )

  return <ark.div {...mergedProps} ref={ref} />
}
