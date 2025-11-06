import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { composeRefs, usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { usePopoverContext } from './use-popover-context'

export const PopoverContentElement = 'div' as const
export interface PopoverContentProps
  extends ComponentProps<typeof PopoverContentElement>,
    PolymorphicProps {}

export const PopoverContent = (props: PopoverContentProps) => {
  const { ref, ...restProps } = props
  const popover = usePopoverContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(popover.getContentProps(), presence.getPresenceProps(), restProps)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
}
