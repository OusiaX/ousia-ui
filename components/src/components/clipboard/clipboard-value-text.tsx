import { type PolymorphicProps, ark } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useClipboardContext } from './use-clipboard-context'

export interface ClipboardValueTextProps extends ComponentProps<'span'>, PolymorphicProps {}

export const ClipboardValueText = (props: ClipboardValueTextProps) => {
  const { ref, children, ...restProps } = props
  const clipboard = useClipboardContext()
  return (
    <ark.span {...restProps} ref={ref}>
      {children || clipboard.value}
    </ark.span>
  )
}
