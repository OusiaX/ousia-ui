import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { usePopoverContext } from './use-popover-context'

export interface PopoverTitleProps extends ComponentProps<'div'>, PolymorphicProps {}

export const PopoverTitle = (props: PopoverTitleProps) => {
  const { ref, ...restProps } = props
  const popover = usePopoverContext()
  const mergedProps = mergeProps(popover.getTitleProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
