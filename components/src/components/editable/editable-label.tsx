import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useEditableContext } from './use-editable-context'

export interface EditableLabelBaseProps extends PolymorphicProps {}
export interface EditableLabelProps extends ComponentProps<'label'>, EditableLabelBaseProps {}

export const EditableLabel = (props: EditableLabelProps) => {
  const { ref, ...restProps } = props
  const editable = useEditableContext()
  const mergedProps = mergeProps(editable.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
