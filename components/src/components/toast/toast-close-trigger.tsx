import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useToastContext } from './use-toast-context'

export interface ToastCloseTriggerBaseProps extends PolymorphicProps {}
export interface ToastCloseTriggerProps
  extends ComponentProps<'button'>,
    ToastCloseTriggerBaseProps {}

export const ToastCloseTrigger = (props: ToastCloseTriggerProps) => {
  const { ref, ...restProps } = props
  const toast = useToastContext()
  const mergedProps = mergeProps(toast.getCloseTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
