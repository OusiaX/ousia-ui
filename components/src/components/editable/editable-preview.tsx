import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useEditableContext } from './use-editable-context'

export interface EditablePreviewProps extends ComponentProps<'span'>, PolymorphicProps {}

export const EditablePreview = (props: EditablePreviewProps) => {
  const { ref, ...restProps } = props
  const editable = useEditableContext()
  const mergedProps = mergeProps(editable.getPreviewProps(), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
