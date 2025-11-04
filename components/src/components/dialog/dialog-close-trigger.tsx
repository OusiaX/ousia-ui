import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDialogContext } from './use-dialog-context'

export interface DialogCloseTriggerBaseProps extends PolymorphicProps {}
export interface DialogCloseTriggerProps
  extends ComponentProps<'button'>,
    DialogCloseTriggerBaseProps {}

export const DialogCloseTrigger = (props: DialogCloseTriggerProps) => {
  const { ref, ...restProps } = props
  const dialog = useDialogContext()
  const mergedProps = mergeProps(dialog.getCloseTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
