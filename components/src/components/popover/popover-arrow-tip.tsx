import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { usePopoverContext } from './use-popover-context'

export interface PopoverArrowTipProps extends ComponentProps<'div'>, PolymorphicProps {}

export const PopoverArrowTip = (props: PopoverArrowTipProps) => {
  const { ref, ...restProps } = props
  const popover = usePopoverContext()
  const mergedProps = mergeProps(popover.getArrowTipProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
