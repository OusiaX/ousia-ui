import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { composeRefs, usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useDialogContext } from './use-dialog-context'

export interface DialogContentProps extends ComponentProps<'div'>, PolymorphicProps {}

export const DialogContent = (props: DialogContentProps) => {
  const { ref, ...restProps } = props
  const dialog = useDialogContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(dialog.getContentProps(), presence.getPresenceProps(), restProps)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
}
