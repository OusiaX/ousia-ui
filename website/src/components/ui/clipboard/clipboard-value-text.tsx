import { type PolymorphicProps, ark } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useClipboardContext } from './use-clipboard-context'

export const ClipboardValueTextElement = 'span' as const
export interface ClipboardValueTextProps
  extends ComponentProps<typeof ClipboardValueTextElement>,
    PolymorphicProps {}

export const ClipboardValueText = (props: ClipboardValueTextProps) => {
  const { ref, children, ...restProps } = props
  const clipboard = useClipboardContext()
  return (
    <ark.span {...restProps} ref={ref}>
      {children || clipboard.value}
    </ark.span>
  )
}
