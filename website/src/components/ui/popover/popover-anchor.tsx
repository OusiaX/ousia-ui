import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { usePopoverContext } from './use-popover-context'

export const PopoverAnchorElement = 'div' as const
export interface PopoverAnchorProps
  extends ComponentProps<typeof PopoverAnchorElement>,
    PolymorphicProps {}

export const PopoverAnchor = (props: PopoverAnchorProps) => {
  const { ref, ...restProps } = props
  const popover = usePopoverContext()
  const mergedProps = mergeProps(popover.getAnchorProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
