import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { useToastContext } from './use-toast-context'

export interface ToastRootBaseProps extends PolymorphicProps {}
export interface ToastRootProps extends HTMLProps<'div'>, ToastRootBaseProps {}

export const ToastRoot = forwardRef<HTMLDivElement, ToastRootProps>((props, ref) => {
  const toast = useToastContext()
  const mergedProps = mergeProps(toast.getRootProps(), props)

  return (
    <ark.div {...mergedProps} ref={ref}>
      <div {...toast.getGhostBeforeProps()} />
      {props.children}
      <div {...toast.getGhostAfterProps()} />
    </ark.div>
  )
})

ToastRoot.displayName = 'ToastRoot'
