import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTooltipContext } from './use-tooltip-context'

export interface TooltipTriggerProps extends ComponentProps<'button'>, PolymorphicProps {}

export const TooltipTrigger = (props: TooltipTriggerProps) => {
  const { ref, ...restProps } = props
  const tooltip = useTooltipContext()
  const mergedProps = mergeProps(tooltip.getTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
