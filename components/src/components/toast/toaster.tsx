import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { ark } from '@ousia-ui/ark'
import { useEnvironmentContext, useLocaleContext } from '@ousia-ui/ark/providers'
import { mergeProps, normalizeProps, useMachine } from '@zag-js/react'
import * as toast from '@zag-js/toast'
import { type ComponentProps, type ReactNode, useId } from 'react'
import type { CreateToasterReturn } from './create-toaster'
import { ToastProvider } from './use-toast-context'

export interface ToasterBaseProps extends PolymorphicProps, Omit<toast.GroupProps, 'store' | 'id'> {
  toaster: CreateToasterReturn
  children: (toast: toast.Options<ReactNode>) => ReactNode
}

export interface ToasterProps extends Assign<ComponentProps<'div'>, ToasterBaseProps> {}

export const Toaster = (props: ToasterProps) => {
  const { ref, toaster, children, ...localProps } = props

  const locale = useLocaleContext()
  const env = useEnvironmentContext()

  const service = useMachine(toast.group.machine, {
    store: toaster,
    id: useId(),
    dir: locale?.dir,
    getRootNode: env?.getRootNode,
  })

  const api = toast.group.connect(service, normalizeProps)

  const mergedProps = mergeProps(api.getGroupProps(), localProps)

  return (
    <ark.div {...mergedProps} ref={ref}>
      {api.getToasts().map((toast, index) => (
        <ToastActor key={toast.id} value={toast} parent={service} index={index}>
          {(ctx) => children(ctx)}
        </ToastActor>
      ))}
    </ark.div>
  )
}

interface ToastActorProps {
  value: toast.Props<ReactNode>
  parent: toast.GroupService
  index: number
  children: (ctx: toast.Options<ReactNode>) => ReactNode
}

const ToastActor = (props: ToastActorProps) => {
  const env = useEnvironmentContext()
  const localProps = {
    ...props.value,
    parent: props.parent,
    index: props.index,
    getRootNode: env.getRootNode,
  }

  const service = useMachine(toast.machine, { ...localProps })
  const api = toast.connect(service, normalizeProps)
  return <ToastProvider value={api}>{props.children(props.value)}</ToastProvider>
}

ToastActor.displayName = 'ToastActor'
