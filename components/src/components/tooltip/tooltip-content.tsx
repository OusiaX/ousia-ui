import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { composeRefs, usePresenceContext } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { useTooltipContext } from './use-tooltip-context'

export interface TooltipContentBaseProps extends PolymorphicProps {}
export interface TooltipContentProps extends HTMLProps<'div'>, TooltipContentBaseProps {}

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>((props, ref) => {
  const tooltip = useTooltipContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(tooltip.getContentProps(), presence.getPresenceProps(), props)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
})

TooltipContent.displayName = 'TooltipContent'
