import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useToastContext } from './use-toast-context'

export interface ToastTitleBaseProps extends PolymorphicProps {}
export interface ToastTitleProps extends ComponentProps<'div'>, ToastTitleBaseProps {}

export const ToastTitle = (props: ToastTitleProps) => {
  const { ref, ...restProps } = props
  const toast = useToastContext()
  const mergedProps = mergeProps(toast.getTitleProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
