import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { usePopoverContext } from './use-popover-context'

export const PopoverDescriptionElement = 'div' as const
export interface PopoverDescriptionProps
  extends ComponentProps<typeof PopoverDescriptionElement>,
    PolymorphicProps {}

export const PopoverDescription = (props: PopoverDescriptionProps) => {
  const { ref, ...restProps } = props
  const popover = usePopoverContext()
  const mergedProps = mergeProps(popover.getDescriptionProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
