import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { composeRefs, usePresenceContext } from '@ousia-ui/ark/utils'
import { ark, type HTMLProps, type PolymorphicProps } from '@ousia-ui/ark'
import { useHoverCardContext } from './use-hover-card-context'

export interface HoverCardContentBaseProps extends PolymorphicProps {}
export interface HoverCardContentProps extends HTMLProps<'div'>, HoverCardContentBaseProps {}

export const HoverCardContent = forwardRef<HTMLDivElement, HoverCardContentProps>((props, ref) => {
  const hoverCard = useHoverCardContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(hoverCard.getContentProps(), presence.getPresenceProps(), props)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
})

HoverCardContent.displayName = 'HoverCardContent'
