import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { composeRefs, usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'

export interface SelectContentProps extends ComponentProps<'div'>, PolymorphicProps {}

export const SelectContent = (props: SelectContentProps) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(select.getContentProps(), presence.getPresenceProps(), restProps)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
}
