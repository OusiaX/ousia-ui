import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { composeRefs } from '@ousia-ui/ark/utils'
import type { HTMLProps, PolymorphicProps } from '@ousia-ui/ark'
import { ark } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import { useDialogContext } from './use-dialog-context'

export interface DialogContentBaseProps extends PolymorphicProps {}
export interface DialogContentProps extends HTMLProps<'div'>, DialogContentBaseProps {}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => {
  const dialog = useDialogContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(dialog.getContentProps(), presence.getPresenceProps(), props)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
})

DialogContent.displayName = 'DialogContent'
