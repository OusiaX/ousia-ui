import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLProps, type PolymorphicProps } from '@ousia-ui/ark'
import { useHoverCardContext } from './use-hover-card-context'

export interface HoverCardTriggerBaseProps extends PolymorphicProps {}
export interface HoverCardTriggerProps extends HTMLProps<'button'>, HoverCardTriggerBaseProps {}

export const HoverCardTrigger = forwardRef<HTMLButtonElement, HoverCardTriggerProps>((props, ref) => {
  const hoverCard = useHoverCardContext()
  const mergedProps = mergeProps(hoverCard.getTriggerProps(), props)

  return <ark.button {...mergedProps} ref={ref} />
})

HoverCardTrigger.displayName = 'HoverCardTrigger'
