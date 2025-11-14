import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTooltipContext } from './use-tooltip-context'

export const TooltipArrowTipElement = 'div' as const
export interface TooltipArrowTipProps
  extends ComponentProps<typeof TooltipArrowTipElement>,
    PolymorphicProps {}

export const TooltipArrowTip = (props: TooltipArrowTipProps) => {
  const { ref, ...restProps } = props
  const tooltip = useTooltipContext()
  const mergedProps = mergeProps(tooltip.getArrowTipProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
