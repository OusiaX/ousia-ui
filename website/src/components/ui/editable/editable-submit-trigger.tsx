import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useEditableContext } from './use-editable-context'

export const EditableSubmitTriggerElement = 'button' as const
export interface EditableSubmitTriggerProps
  extends ComponentProps<typeof EditableSubmitTriggerElement>,
    PolymorphicProps {}

export const EditableSubmitTrigger = (props: EditableSubmitTriggerProps) => {
  const { ref, ...restProps } = props
  const editable = useEditableContext()
  const mergedProps = mergeProps(editable.getSubmitTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
