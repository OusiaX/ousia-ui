import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ChannelProps } from '@zag-js/color-picker'
import type { ComponentProps } from 'react'
import { ColorPickerChannelPropsProvider } from './use-color-picker-channel-props-context'
import { useColorPickerContext } from './use-color-picker-context'
import { useColorPickerFormatPropsContext } from './use-color-picker-format-context'

export interface ColorPickerChannelSliderBaseProps extends ChannelProps, PolymorphicProps {}
export interface ColorPickerChannelSliderProps
  extends ComponentProps<'div'>,
    ColorPickerChannelSliderBaseProps {}

export const ColorPickerChannelSlider = (props: ColorPickerChannelSliderProps) => {
  const { ref, ...restProps } = props
  const [channelProps, localProps] = createSplitProps<ChannelProps>()(restProps, [
    'channel',
    'orientation',
  ])

  const colorPicker = useColorPickerContext()

  const formatProps = useColorPickerFormatPropsContext()
  const channelSliderProps = { ...channelProps, ...formatProps }

  const mergedProps = mergeProps(colorPicker.getChannelSliderProps(channelSliderProps), localProps)

  return (
    <ColorPickerChannelPropsProvider value={channelProps}>
      <ark.div {...mergedProps} ref={ref} />
    </ColorPickerChannelPropsProvider>
  )
}
