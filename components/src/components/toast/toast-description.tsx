import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useToastContext } from './use-toast-context'

export const ToastDescriptionElement = 'div' as const
export interface ToastDescriptionProps
  extends ComponentProps<typeof ToastDescriptionElement>,
    PolymorphicProps {}

export const ToastDescription = (props: ToastDescriptionProps) => {
  const { ref, ...restProps } = props
  const toast = useToastContext()
  const mergedProps = mergeProps(toast.getDescriptionProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
