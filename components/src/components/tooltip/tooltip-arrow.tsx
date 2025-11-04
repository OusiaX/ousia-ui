import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTooltipContext } from './use-tooltip-context'

export interface TooltipArrowBaseProps extends PolymorphicProps {}
export interface TooltipArrowProps extends ComponentProps<'div'>, TooltipArrowBaseProps {}

export const TooltipArrow = (props: TooltipArrowProps) => {
  const { ref, ...restProps } = props
  const tooltip = useTooltipContext()
  const mergedProps = mergeProps(tooltip.getArrowProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
