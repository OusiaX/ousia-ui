import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useClipboardContext } from './use-clipboard-context'

export const ClipboardTriggerElement = 'button' as const
export interface ClipboardTriggerProps
  extends ComponentProps<typeof ClipboardTriggerElement>,
    PolymorphicProps {}

export const ClipboardTrigger = (props: ClipboardTriggerProps) => {
  const { ref, ...restProps } = props
  const clipboard = useClipboardContext()
  const mergedProps = mergeProps(clipboard.getTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
