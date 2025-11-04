import { type HTMLProps, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { composeRefs, usePresenceContext } from '@ousia-ui/ark/utils'
import type { Ref } from 'react'
import { useSelectContext } from './use-select-context'

export interface SelectContentBaseProps extends PolymorphicProps {}
export interface SelectContentProps extends HTMLProps<'div'>, SelectContentBaseProps {}

export const SelectContent = (props: SelectContentProps & { ref?: Ref<HTMLDivElement> }) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(select.getContentProps(), presence.getPresenceProps(), restProps)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
}
