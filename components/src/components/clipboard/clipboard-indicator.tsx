import { mergeProps } from '@zag-js/react'
import { type ReactNode, forwardRef } from 'react'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { useClipboardContext } from './use-clipboard-context'

export interface ClipboardIndicatorBaseProps {
  copied?: ReactNode | undefined
}
export interface ClipboardIndicatorProps extends HTMLProps<'div'>, ClipboardIndicatorBaseProps {}

export const ClipboardIndicator = forwardRef<HTMLDivElement, ClipboardIndicatorProps>((props, ref) => {
  const { children, copied, ...localProps } = props
  const clipboard = useClipboardContext()
  const mergedProps = mergeProps(clipboard.getIndicatorProps({ copied: clipboard.copied }), localProps)

  return (
    <arkSimple.div {...mergedProps} ref={ref}>
      {clipboard.copied ? copied : children}
    </arkSimple.div>
  )
})

ClipboardIndicator.displayName = 'ClipboardIndicator'
