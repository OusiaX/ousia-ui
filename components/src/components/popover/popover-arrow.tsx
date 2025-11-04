import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { usePopoverContext } from './use-popover-context'

export interface PopoverArrowProps extends ComponentProps<'div'>, PolymorphicProps {}

export const PopoverArrow = (props: PopoverArrowProps) => {
  const { ref, ...restProps } = props
  const popover = usePopoverContext()
  const mergedProps = mergeProps(popover.getArrowProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
