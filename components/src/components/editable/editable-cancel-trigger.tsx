import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useEditableContext } from './use-editable-context'

export interface EditableCancelTriggerBaseProps extends PolymorphicProps {}
export interface EditableCancelTriggerProps
  extends ComponentProps<'button'>,
    EditableCancelTriggerBaseProps {}

export const EditableCancelTrigger = (props: EditableCancelTriggerProps) => {
  const { ref, ...restProps } = props
  const editable = useEditableContext()
  const mergedProps = mergeProps(editable.getCancelTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
