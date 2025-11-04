import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTagsInputContext } from './use-tags-input-context'

export interface TagsInputLabelProps extends ComponentProps<'label'>, PolymorphicProps {}

export const TagsInputLabel = (props: TagsInputLabelProps) => {
  const { ref, ...restProps } = props
  const tagsInput = useTagsInputContext()
  const mergedProps = mergeProps(tagsInput.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
