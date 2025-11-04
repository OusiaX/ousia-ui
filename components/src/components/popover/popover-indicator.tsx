import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { usePopoverContext } from './use-popover-context'

export interface PopoverIndicatorBaseProps extends PolymorphicProps {}
export interface PopoverIndicatorProps extends ComponentProps<'div'>, PopoverIndicatorBaseProps {}

export const PopoverIndicator = (props: PopoverIndicatorProps) => {
  const { ref, ...restProps } = props
  const popover = usePopoverContext()
  const mergedProps = mergeProps(popover.getIndicatorProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
