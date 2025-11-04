import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useEditableContext } from './use-editable-context'

export interface EditableControlBaseProps extends PolymorphicProps {}
export interface EditableControlProps extends ComponentProps<'div'>, EditableControlBaseProps {}

export const EditableControl = (props: EditableControlProps) => {
  const { ref, ...restProps } = props
  const editable = useEditableContext()
  const mergedProps = mergeProps(editable.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
