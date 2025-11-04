import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { usePopoverContext } from './use-popover-context'

export interface PopoverCloseTriggerBaseProps extends PolymorphicProps {}
export interface PopoverCloseTriggerProps
  extends ComponentProps<'button'>,
    PopoverCloseTriggerBaseProps {}

export const PopoverCloseTrigger = (props: PopoverCloseTriggerProps) => {
  const { ref, ...restProps } = props
  const popover = usePopoverContext()
  const mergedProps = mergeProps(popover.getCloseTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
