import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { usePopoverContext } from './use-popover-context'

export const PopoverIndicatorElement = 'div' as const
export interface PopoverIndicatorProps
  extends ComponentProps<typeof PopoverIndicatorElement>,
    PolymorphicProps {}

export const PopoverIndicator = (props: PopoverIndicatorProps) => {
  const { ref, ...restProps } = props
  const popover = usePopoverContext()
  const mergedProps = mergeProps(popover.getIndicatorProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
