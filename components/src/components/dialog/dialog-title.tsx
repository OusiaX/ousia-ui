import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDialogContext } from './use-dialog-context'

export interface DialogTitleBaseProps extends PolymorphicProps {}
export interface DialogTitleProps extends ComponentProps<'h2'>, DialogTitleBaseProps {}

export const DialogTitle = (props: DialogTitleProps) => {
  const { ref, ...restProps } = props
  const dialog = useDialogContext()
  const mergedProps = mergeProps(dialog.getTitleProps(), restProps)

  return <ark.h2 {...mergedProps} ref={ref} />
}
