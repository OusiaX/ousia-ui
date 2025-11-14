import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useTooltipContext } from './use-tooltip-context'

export const TooltipPositionerElement = 'div' as const
export interface TooltipPositionerProps
  extends ComponentProps<typeof TooltipPositionerElement>,
    PolymorphicProps {}

export const TooltipPositioner = (props: TooltipPositionerProps) => {
  const { ref, ...restProps } = props
  const tooltip = useTooltipContext()
  const mergedProps = mergeProps(tooltip.getPositionerProps(), restProps)
  const presence = usePresenceContext()

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={ref} />
}
