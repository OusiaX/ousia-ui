import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { useLocaleContext } from '@ousia-ui/ark/providers'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { useColorPickerChannelPropsContext } from './use-color-picker-channel-props-context'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerChannelSliderValueTextBaseProps {}
export interface ColorPickerChannelSliderValueTextProps
  extends HTMLProps<'span'>,
    ColorPickerChannelSliderValueTextBaseProps {}

export const ColorPickerChannelSliderValueText = forwardRef<HTMLSpanElement, ColorPickerChannelSliderValueTextProps>(
  (props, ref) => {
    const { locale } = useLocaleContext()
    const colorPicker = useColorPickerContext()
    const channelProps = useColorPickerChannelPropsContext()
    const mergedProps = mergeProps(colorPicker.getChannelSliderValueTextProps(channelProps), props)

    return (
      <arkSimple.span {...mergedProps} ref={ref}>
        {props.children || colorPicker.getChannelValueText(channelProps.channel, locale)}
      </arkSimple.span>
    )
  },
)

ColorPickerChannelSliderValueText.displayName = 'ColorPickerChannelSliderValueText'
