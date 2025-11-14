import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useToastContext } from './use-toast-context'

export const ToastActionTriggerElement = 'button' as const
export interface ToastActionTriggerProps
  extends ComponentProps<typeof ToastActionTriggerElement>,
    PolymorphicProps {}

export const ToastActionTrigger = (props: ToastActionTriggerProps) => {
  const { ref, ...restProps } = props
  const toast = useToastContext()
  const mergedProps = mergeProps(toast.getActionTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
