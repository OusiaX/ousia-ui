import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useEditableContext } from './use-editable-context'

export const EditableEditTriggerElement = 'button' as const
export interface EditableEditTriggerProps
  extends ComponentProps<typeof EditableEditTriggerElement>,
    PolymorphicProps {}

export const EditableEditTrigger = (props: EditableEditTriggerProps) => {
  const { ref, ...restProps } = props
  const editable = useEditableContext()
  const mergedProps = mergeProps(editable.getEditTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
