import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useHoverCardContext } from './use-hover-card-context'

export interface HoverCardPositionerProps extends ComponentProps<'div'>, PolymorphicProps {}

export const HoverCardPositioner = (props: HoverCardPositionerProps) => {
  const { ref, ...restProps } = props
  const hoverCard = useHoverCardContext()
  const mergedProps = mergeProps(hoverCard.getPositionerProps(), restProps)
  const presence = usePresenceContext()

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={ref} />
}
