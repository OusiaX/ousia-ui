import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useClipboardContext } from './use-clipboard-context'

export const ClipboardControlElement = 'div' as const
export interface ClipboardControlProps
  extends ComponentProps<typeof ClipboardControlElement>,
    PolymorphicProps {}

export const ClipboardControl = (props: ClipboardControlProps) => {
  const { ref, ...restProps } = props
  const clipboard = useClipboardContext()
  const mergedProps = mergeProps(clipboard.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
