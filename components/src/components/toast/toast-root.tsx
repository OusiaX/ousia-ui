import { type Assign, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useToastContext } from './use-toast-context'

export const ToastRootElement = 'div' as const
export type ToastRootProps = Assign<ComponentProps<typeof ToastRootElement>, PolymorphicProps>

export const ToastRoot = (props: ToastRootProps) => {
  const { ref, ...restProps } = props
  const toast = useToastContext()
  const mergedProps = mergeProps(toast.getRootProps(), restProps)

  return (
    <ark.div {...mergedProps} ref={ref}>
      <div {...toast.getGhostBeforeProps()} />
      {restProps.children}
      <div {...toast.getGhostAfterProps()} />
    </ark.div>
  )
}
