import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useHoverCardContext } from './use-hover-card-context'

export const HoverCardTriggerElement = 'button' as const
export interface HoverCardTriggerProps
  extends ComponentProps<typeof HoverCardTriggerElement>,
    PolymorphicProps {}

export const HoverCardTrigger = (props: HoverCardTriggerProps) => {
  const { ref, ...restProps } = props
  const hoverCard = useHoverCardContext()
  const mergedProps = mergeProps(hoverCard.getTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
