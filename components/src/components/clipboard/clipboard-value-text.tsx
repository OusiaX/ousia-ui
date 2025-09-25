import { forwardRef } from 'react'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { useClipboardContext } from './use-clipboard-context'

export interface ClipboardValueTextBaseProps {}
export interface ClipboardValueTextProps extends HTMLProps<'span'>, ClipboardValueTextBaseProps {}

export const ClipboardValueText = forwardRef<HTMLDivElement, ClipboardValueTextProps>((props, ref) => {
  const clipboard = useClipboardContext()
  return (
    <arkSimple.span {...props} ref={ref}>
      {props.children || clipboard.value}
    </arkSimple.span>
  )
})

ClipboardValueText.displayName = 'ClipboardValueText'
