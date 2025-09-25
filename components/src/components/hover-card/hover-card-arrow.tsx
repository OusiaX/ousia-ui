import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLProps, type PolymorphicProps } from '@ousia-ui/ark'
import { useHoverCardContext } from './use-hover-card-context'

export interface HoverCardArrowBaseProps extends PolymorphicProps {}
export interface HoverCardArrowProps extends HTMLProps<'div'>, HoverCardArrowBaseProps {}

export const HoverCardArrow = forwardRef<HTMLDivElement, HoverCardArrowProps>((props, ref) => {
  const hoverCard = useHoverCardContext()
  const mergedProps = mergeProps(hoverCard.getArrowProps(), props)

  return <ark.div {...mergedProps} ref={ref} />
})

HoverCardArrow.displayName = 'HoverCardArrow'
