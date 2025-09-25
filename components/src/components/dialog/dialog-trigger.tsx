import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import type { HTMLProps, PolymorphicProps } from '@ousia-ui/ark'
import { arkMemo } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import { useDialogContext } from './use-dialog-context'

export interface DialogTriggerBaseProps extends PolymorphicProps {}
export interface DialogTriggerProps extends HTMLProps<'button'>, DialogTriggerBaseProps {}

export const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>((props, ref) => {
  const dialog = useDialogContext()
  const presence = usePresenceContext()

  const mergedProps = mergeProps(
    {
      ...dialog.getTriggerProps(),
      'aria-controls': presence.unmounted ? undefined : dialog.getTriggerProps()['aria-controls'],
    },
    props,
  )

  return <arkMemo.button {...mergedProps} ref={ref} />
})

DialogTrigger.displayName = 'DialogTrigger'
