import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { composeRefs, usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useTooltipContext } from './use-tooltip-context'

export interface TooltipContentProps extends ComponentProps<'div'>, PolymorphicProps {}

export const TooltipContent = (props: TooltipContentProps) => {
  const { ref, ...restProps } = props
  const tooltip = useTooltipContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(tooltip.getContentProps(), presence.getPresenceProps(), restProps)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
}
