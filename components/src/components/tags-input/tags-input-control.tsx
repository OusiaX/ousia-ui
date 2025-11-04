import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTagsInputContext } from './use-tags-input-context'

export interface TagsInputControlBaseProps extends PolymorphicProps {}
export interface TagsInputControlProps extends ComponentProps<'div'>, TagsInputControlBaseProps {}

export const TagsInputControl = (props: TagsInputControlProps) => {
  const { ref, ...restProps } = props
  const tagsInput = useTagsInputContext()
  const mergedProps = mergeProps(tagsInput.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
