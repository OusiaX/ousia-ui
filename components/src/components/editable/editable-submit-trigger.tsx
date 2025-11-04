import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useEditableContext } from './use-editable-context'

export interface EditableSubmitTriggerBaseProps extends PolymorphicProps {}
export interface EditableSubmitTriggerProps
  extends ComponentProps<'button'>,
    EditableSubmitTriggerBaseProps {}

export const EditableSubmitTrigger = (props: EditableSubmitTriggerProps) => {
  const { ref, ...restProps } = props
  const editable = useEditableContext()
  const mergedProps = mergeProps(editable.getSubmitTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
