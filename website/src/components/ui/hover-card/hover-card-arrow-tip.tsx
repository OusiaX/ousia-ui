import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useHoverCardContext } from './use-hover-card-context'

export const HoverCardArrowTipElement = 'div' as const
export interface HoverCardArrowTipProps
  extends ComponentProps<typeof HoverCardArrowTipElement>,
    PolymorphicProps {}

export const HoverCardArrowTip = (props: HoverCardArrowTipProps) => {
  const { ref, ...restProps } = props
  const hoverCard = useHoverCardContext()
  const mergedProps = mergeProps(hoverCard.getArrowTipProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
