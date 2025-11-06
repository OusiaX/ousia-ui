import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDialogContext } from './use-dialog-context'

export const DialogCloseTriggerElement = 'button' as const
export interface DialogCloseTriggerProps
  extends ComponentProps<typeof DialogCloseTriggerElement>,
    PolymorphicProps {}

export const DialogCloseTrigger = (props: DialogCloseTriggerProps) => {
  const { ref, ...restProps } = props
  const dialog = useDialogContext()
  const mergedProps = mergeProps(dialog.getCloseTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
