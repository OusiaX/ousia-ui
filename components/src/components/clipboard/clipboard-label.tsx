import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useClipboardContext } from './use-clipboard-context'

export interface ClipboardLabelBaseProps extends PolymorphicProps {}
export interface ClipboardLabelProps extends ComponentProps<'label'>, ClipboardLabelBaseProps {}

export const ClipboardLabel = (props: ClipboardLabelProps) => {
  const { ref, ...restProps } = props
  const clipboard = useClipboardContext()
  const mergedProps = mergeProps(clipboard.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
