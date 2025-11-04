import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { usePopoverContext } from './use-popover-context'

export interface PopoverTriggerBaseProps extends PolymorphicProps {}
export interface PopoverTriggerProps extends ComponentProps<'button'>, PopoverTriggerBaseProps {}

export const PopoverTrigger = (props: PopoverTriggerProps) => {
  const { ref, ...restProps } = props
  const popover = usePopoverContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(
    {
      ...popover.getTriggerProps(),
      'aria-controls': presence.unmounted ? undefined : popover.getTriggerProps()['aria-controls'],
    },
    restProps,
  )

  return <ark.button {...mergedProps} ref={ref} />
}
