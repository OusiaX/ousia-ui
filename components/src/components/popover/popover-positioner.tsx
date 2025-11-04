import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { usePopoverContext } from './use-popover-context'

export interface PopoverPositionerBaseProps extends PolymorphicProps {}
export interface PopoverPositionerProps extends ComponentProps<'div'>, PopoverPositionerBaseProps {}

export const PopoverPositioner = (props: PopoverPositionerProps) => {
  const { ref, ...restProps } = props
  const popover = usePopoverContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(popover.getPositionerProps(), restProps)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={ref} />
}
