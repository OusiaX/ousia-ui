import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useLocaleContext } from '@ousia-ui/ark/providers'
import type { ComponentProps } from 'react'
import { useColorPickerChannelPropsContext } from './use-color-picker-channel-props-context'
import { useColorPickerContext } from './use-color-picker-context'

export const ColorPickerChannelSliderValueTextElement = 'span' as const
export interface ColorPickerChannelSliderValueTextProps
  extends ComponentProps<typeof ColorPickerChannelSliderValueTextElement>,
    PolymorphicProps {}

export const ColorPickerChannelSliderValueText = (
  props: ColorPickerChannelSliderValueTextProps,
) => {
  const { ref, ...restProps } = props
  const { locale } = useLocaleContext()
  const colorPicker = useColorPickerContext()
  const channelProps = useColorPickerChannelPropsContext()
  const mergedProps = mergeProps(
    colorPicker.getChannelSliderValueTextProps(channelProps),
    restProps,
  )

  return (
    <ark.span {...mergedProps} ref={ref}>
      {restProps.children || colorPicker.getChannelValueText(channelProps.channel, locale)}
    </ark.span>
  )
}
