import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { composeRefs } from '@ousia-ui/ark/utils'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useColorPickerContext } from './use-color-picker-context'

export const ColorPickerContentElement = 'div' as const
export interface ColorPickerContentProps
  extends ComponentProps<typeof ColorPickerContentElement>,
    PolymorphicProps {}

export const ColorPickerContent = (props: ColorPickerContentProps) => {
  const { ref, ...restProps } = props
  const colorPicker = useColorPickerContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(
    colorPicker.getContentProps(),
    presence.getPresenceProps(),
    restProps,
  )

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
}
