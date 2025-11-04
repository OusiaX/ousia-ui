import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { composeRefs, usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useComboboxContext } from './use-combobox-context'

export interface ComboboxContentProps extends ComponentProps<'div'>, PolymorphicProps {}

export const ComboboxContent = (props: ComboboxContentProps) => {
  const { ref, ...restProps } = props
  const combobox = useComboboxContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(combobox.getContentProps(), presence.getPresenceProps(), restProps)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
}
