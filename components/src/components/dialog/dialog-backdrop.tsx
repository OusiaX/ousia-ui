import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark } from '@ousia-ui/ark'
import type { HTMLProps, PolymorphicProps } from '@ousia-ui/ark'
import { composeRefs, usePresence, useRenderStrategyPropsContext } from '@ousia-ui/ark/utils'
import { useDialogContext } from './use-dialog-context'

export interface DialogBackdropBaseProps extends PolymorphicProps {}
export interface DialogBackdropProps extends HTMLProps<'div'>, DialogBackdropBaseProps {}

export const DialogBackdrop = forwardRef<HTMLDivElement, DialogBackdropProps>((props, ref) => {
  const dialog = useDialogContext()
  const renderStrategyProps = useRenderStrategyPropsContext()
  // @ts-ignore - TypeScript type inference issue with spreading RenderStrategyProps
  const presence = usePresence({ ...renderStrategyProps, present: dialog.open })
  const mergedProps = mergeProps(dialog.getBackdropProps(), presence.getPresenceProps(), props)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
})

DialogBackdrop.displayName = 'DialogBackdrop'
