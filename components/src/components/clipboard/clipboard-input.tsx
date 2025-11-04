import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useClipboardContext } from './use-clipboard-context'

export interface ClipboardInputProps extends ComponentProps<'input'>, PolymorphicProps {}

export const ClipboardInput = (props: ClipboardInputProps) => {
  const { ref, ...restProps } = props
  const clipboard = useClipboardContext()
  const mergedProps = mergeProps(clipboard.getInputProps(), restProps)

  return <ark.input {...mergedProps} ref={ref} />
}
