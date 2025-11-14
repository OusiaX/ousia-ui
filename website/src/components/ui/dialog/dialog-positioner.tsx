import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useDialogContext } from './use-dialog-context'

export const DialogPositionerElement = 'div' as const
export interface DialogPositionerProps
  extends ComponentProps<typeof DialogPositionerElement>,
    PolymorphicProps {}

export const DialogPositioner = (props: DialogPositionerProps) => {
  const { ref, ...restProps } = props
  const dialog = useDialogContext()
  const mergedProps = mergeProps(dialog.getPositionerProps(), restProps)
  const presence = usePresenceContext()

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={ref} />
}
