import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDialogContext } from './use-dialog-context'

export const DialogDescriptionElement = 'div' as const
export interface DialogDescriptionProps
  extends ComponentProps<typeof DialogDescriptionElement>,
    PolymorphicProps {}

export const DialogDescription = (props: DialogDescriptionProps) => {
  const { ref, ...restProps } = props
  const dialog = useDialogContext()
  const mergedProps = mergeProps(dialog.getDescriptionProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
