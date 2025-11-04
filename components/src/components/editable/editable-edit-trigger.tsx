import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useEditableContext } from './use-editable-context'

export interface EditableEditTriggerBaseProps extends PolymorphicProps {}
export interface EditableEditTriggerProps
  extends ComponentProps<'button'>,
    EditableEditTriggerBaseProps {}

export const EditableEditTrigger = (props: EditableEditTriggerProps) => {
  const { ref, ...restProps } = props
  const editable = useEditableContext()
  const mergedProps = mergeProps(editable.getEditTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
