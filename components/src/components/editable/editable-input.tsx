import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useEditableContext } from './use-editable-context'

export interface EditableInputBaseProps extends PolymorphicProps {}
export interface EditableInputProps extends ComponentProps<'input'>, EditableInputBaseProps {}

export const EditableInput = (props: EditableInputProps) => {
  const { ref, ...restProps } = props
  const editable = useEditableContext()
  const mergedProps = mergeProps(editable.getInputProps(), restProps)
  const field = useFieldContext()

  return <ark.input aria-describedby={field?.ariaDescribedby} {...mergedProps} ref={ref} />
}
