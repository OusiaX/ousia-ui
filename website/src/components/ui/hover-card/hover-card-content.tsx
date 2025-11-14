import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { composeRefs, usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useHoverCardContext } from './use-hover-card-context'

export const HoverCardContentElement = 'div' as const
export interface HoverCardContentProps
  extends ComponentProps<typeof HoverCardContentElement>,
    PolymorphicProps {}

export const HoverCardContent = (props: HoverCardContentProps) => {
  const { ref, ...restProps } = props
  const hoverCard = useHoverCardContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(
    hoverCard.getContentProps(),
    presence.getPresenceProps(),
    restProps,
  )

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
}
