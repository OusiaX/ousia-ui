import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark } from '@ousia-ui/ark'
import type { HTMLProps, PolymorphicProps } from '@ousia-ui/ark'
import { useEditableContext } from './use-editable-context'

export interface EditableCancelTriggerBaseProps extends PolymorphicProps {}
export interface EditableCancelTriggerProps extends HTMLProps<'button'>, EditableCancelTriggerBaseProps {}

export const EditableCancelTrigger = forwardRef<HTMLButtonElement, EditableCancelTriggerProps>((props, ref) => {
  const editable = useEditableContext()
  const mergedProps = mergeProps(editable.getCancelTriggerProps(), props)

  return <ark.button {...mergedProps} ref={ref} />
})

EditableCancelTrigger.displayName = 'EditableCancelTrigger'
