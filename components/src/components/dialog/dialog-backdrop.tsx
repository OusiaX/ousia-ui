import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { composeRefs, usePresence, useRenderStrategyPropsContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useDialogContext } from './use-dialog-context'

export interface DialogBackdropProps extends ComponentProps<'div'>, PolymorphicProps {}

export const DialogBackdrop = (props: DialogBackdropProps) => {
  const { ref, ...restProps } = props
  const dialog = useDialogContext()
  const renderStrategyProps = useRenderStrategyPropsContext()
  // @ts-ignore - TypeScript type inference issue with spreading RenderStrategyProps
  const presence = usePresence({ ...renderStrategyProps, present: dialog.open })
  const mergedProps = mergeProps(dialog.getBackdropProps(), presence.getPresenceProps(), restProps)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
}
