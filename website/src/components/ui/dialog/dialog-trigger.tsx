import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useDialogContext } from './use-dialog-context'

export const DialogTriggerElement = 'button' as const
export interface DialogTriggerProps
  extends ComponentProps<typeof DialogTriggerElement>,
    PolymorphicProps {}

export const DialogTrigger = (props: DialogTriggerProps) => {
  const { ref, ...restProps } = props
  const dialog = useDialogContext()
  const presence = usePresenceContext()

  const mergedProps = mergeProps(
    {
      ...dialog.getTriggerProps(),
      'aria-controls': presence.unmounted ? undefined : dialog.getTriggerProps()['aria-controls'],
    },
    restProps,
  )

  return <ark.button {...mergedProps} ref={ref} />
}
