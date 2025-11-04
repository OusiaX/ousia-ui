import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ChannelInputProps } from '@zag-js/color-picker'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerChannelInputBaseProps extends ChannelInputProps, PolymorphicProps {}
export interface ColorPickerChannelInputProps
  extends ComponentProps<'input'>,
    ColorPickerChannelInputBaseProps {}

export const ColorPickerChannelInput = (props: ColorPickerChannelInputProps) => {
  const { ref, ...restProps } = props
  const [channelProps, localProps] = createSplitProps<ChannelInputProps>()(restProps, [
    'channel',
    'orientation',
  ])
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getChannelInputProps(channelProps), localProps)

  return <ark.input {...mergedProps} ref={ref} />
}
