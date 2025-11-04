import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useEditableContext } from './use-editable-context'

export interface EditableAreaProps extends ComponentProps<'div'>, PolymorphicProps {}

export const EditableArea = (props: EditableAreaProps) => {
  const { ref, ...restProps } = props
  const editable = useEditableContext()
  const mergedProps = mergeProps(editable.getAreaProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
