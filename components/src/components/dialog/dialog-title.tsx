import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import type { HTMLProps } from '@ousia-ui/ark'
import { arkSimple } from '@ousia-ui/ark'
import { useDialogContext } from './use-dialog-context'

export interface DialogTitleBaseProps {}
export interface DialogTitleProps extends HTMLProps<'h2'>, DialogTitleBaseProps {}

export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>((props, ref) => {
  const dialog = useDialogContext()
  const mergedProps = mergeProps(dialog.getTitleProps(), props)

  return <arkSimple.h2 {...mergedProps} ref={ref} />
})

DialogTitle.displayName = 'DialogTitle'
