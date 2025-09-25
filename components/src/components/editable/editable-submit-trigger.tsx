import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark } from '@ousia-ui/ark'
import type { HTMLProps, PolymorphicProps } from '@ousia-ui/ark'
import { useEditableContext } from './use-editable-context'

export interface EditableSubmitTriggerBaseProps extends PolymorphicProps {}
export interface EditableSubmitTriggerProps extends HTMLProps<'button'>, EditableSubmitTriggerBaseProps {}

export const EditableSubmitTrigger = forwardRef<HTMLButtonElement, EditableSubmitTriggerProps>((props, ref) => {
  const editable = useEditableContext()
  const mergedProps = mergeProps(editable.getSubmitTriggerProps(), props)

  return <ark.button {...mergedProps} ref={ref} />
})

EditableSubmitTrigger.displayName = 'EditableSubmitTrigger'
