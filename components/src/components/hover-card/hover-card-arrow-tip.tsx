import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLProps, type PolymorphicProps } from '@ousia-ui/ark'
import { useHoverCardContext } from './use-hover-card-context'

export interface HoverCardArrowTipBaseProps extends PolymorphicProps {}
export interface HoverCardArrowTipProps extends HTMLProps<'div'>, HoverCardArrowTipBaseProps {}

export const HoverCardArrowTip = forwardRef<HTMLDivElement, HoverCardArrowTipProps>((props, ref) => {
  const hoverCard = useHoverCardContext()
  const mergedProps = mergeProps(hoverCard.getArrowTipProps(), props)

  return <ark.div {...mergedProps} ref={ref} />
})

HoverCardArrowTip.displayName = 'HoverCardArrowTip'
