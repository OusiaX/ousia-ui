import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, ark } from '@ousia-ui/ark'
import { useClipboardContext } from './use-clipboard-context'

export interface ClipboardControlBaseProps {}
export interface ClipboardControlProps extends HTMLProps<'div'>, ClipboardControlBaseProps {}

export const ClipboardControl = forwardRef<HTMLDivElement, ClipboardControlProps>((props, ref) => {
  const clipboard = useClipboardContext()
  const mergedProps = mergeProps(clipboard.getControlProps(), props)

  return <ark.div {...mergedProps} ref={ref} />
})

ClipboardControl.displayName = 'ClipboardControl'
