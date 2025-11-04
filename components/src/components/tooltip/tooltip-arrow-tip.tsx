import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTooltipContext } from './use-tooltip-context'

export interface TooltipArrowTipBaseProps extends PolymorphicProps {}
export interface TooltipArrowTipProps extends ComponentProps<'div'>, TooltipArrowTipBaseProps {}

export const TooltipArrowTip = (props: TooltipArrowTipProps) => {
  const { ref, ...restProps } = props
  const tooltip = useTooltipContext()
  const mergedProps = mergeProps(tooltip.getArrowTipProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
