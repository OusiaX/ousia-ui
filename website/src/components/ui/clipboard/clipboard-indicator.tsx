import { ark, mergeProps } from '@ousia-ui/ark'
import type { ReactNode } from 'react'
import type { ComponentProps } from 'react'
import { useClipboardContext } from './use-clipboard-context'

export const ClipboardIndicatorElement = 'div' as const
export interface ClipboardIndicatorProps extends ComponentProps<typeof ClipboardIndicatorElement> {
  copied?: ReactNode | undefined
}

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
