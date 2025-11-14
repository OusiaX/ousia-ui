import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useHoverCardContext } from './use-hover-card-context'

export const HoverCardArrowElement = 'div' as const
export interface HoverCardArrowProps
  extends ComponentProps<typeof HoverCardArrowElement>,
    PolymorphicProps {}

export const HoverCardArrow = (props: HoverCardArrowProps) => {
  const { ref, ...restProps } = props
  const hoverCard = useHoverCardContext()
  const mergedProps = mergeProps(hoverCard.getArrowProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
