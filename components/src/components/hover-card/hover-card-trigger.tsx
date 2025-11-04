import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useHoverCardContext } from './use-hover-card-context'

export interface HoverCardTriggerBaseProps extends PolymorphicProps {}
export interface HoverCardTriggerProps
  extends ComponentProps<'button'>,
    HoverCardTriggerBaseProps {}

export const HoverCardTrigger = (props: HoverCardTriggerProps) => {
  const { ref, ...restProps } = props
  const hoverCard = useHoverCardContext()
  const mergedProps = mergeProps(hoverCard.getTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
