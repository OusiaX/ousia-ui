import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTagsInputContext } from './use-tags-input-context'
import { useTagsInputItemPropsContext } from './use-tags-input-item-props-context'

export interface TagsInputItemInputProps extends ComponentProps<'input'>, PolymorphicProps {}

export const TagsInputItemInput = (props: TagsInputItemInputProps) => {
  const { ref, ...restProps } = props
  const tagsInput = useTagsInputContext()
  const itemProps = useTagsInputItemPropsContext()
  const mergedProps = mergeProps(tagsInput.getItemInputProps(itemProps), restProps)

  return <ark.input {...mergedProps} ref={ref} />
}
