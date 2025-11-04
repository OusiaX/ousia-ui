import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerPositionerProps extends ComponentProps<'div'>, PolymorphicProps {}

export const ColorPickerPositioner = (props: ColorPickerPositionerProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getPositionerProps(), restProps)
  const presence = usePresenceContext()

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={ref} />
}
