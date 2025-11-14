import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useDialogContext } from './use-dialog-context'

export const DialogTitleElement = 'h2' as const
export interface DialogTitleProps
  extends ComponentProps<typeof DialogTitleElement>,
    PolymorphicProps {}

export const DialogTitle = (props: DialogTitleProps) => {
  const { ref, ...restProps } = props
  const dialog = useDialogContext()
  const mergedProps = mergeProps(dialog.getTitleProps(), restProps)

  return <ark.h2 {...mergedProps} ref={ref} />
}
