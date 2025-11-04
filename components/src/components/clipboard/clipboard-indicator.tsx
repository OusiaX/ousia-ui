import { ark, mergeProps } from '@ousia-ui/ark'
import type { ReactNode } from 'react'
import type { ComponentProps } from 'react'
import { useClipboardContext } from './use-clipboard-context'

export interface ClipboardIndicatorBaseProps {
  copied?: ReactNode | undefined
}
export interface ClipboardIndicatorProps
  extends ComponentProps<'div'>,
    ClipboardIndicatorBaseProps {}

export const ClipboardIndicator = (props: ClipboardIndicatorProps) => {
  const { ref, children, copied, ...restProps } = props
  const clipboard = useClipboardContext()
  const mergedProps = mergeProps(
    clipboard.getIndicatorProps({ copied: clipboard.copied }),
    restProps,
  )

  return (
    <ark.div {...mergedProps} ref={ref}>
      {clipboard.copied ? copied : children}
    </ark.div>
  )
}
