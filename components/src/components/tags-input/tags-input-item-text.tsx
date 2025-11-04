import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTagsInputContext } from './use-tags-input-context'
import { useTagsInputItemPropsContext } from './use-tags-input-item-props-context'

export interface TagsInputItemTextBaseProps extends PolymorphicProps {}
export interface TagsInputItemTextProps
  extends ComponentProps<'span'>,
    TagsInputItemTextBaseProps {}

export const TagsInputItemText = (props: TagsInputItemTextProps) => {
  const { ref, ...restProps } = props
  const tagsInput = useTagsInputContext()
  const itemProps = useTagsInputItemPropsContext()
  const mergedProps = mergeProps(tagsInput.getItemTextProps(itemProps), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
