import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTagsInputContext } from './use-tags-input-context'
import { useTagsInputItemPropsContext } from './use-tags-input-item-props-context'

export const TagsInputItemPreviewElement = 'div' as const
export interface TagsInputItemPreviewProps
  extends ComponentProps<typeof TagsInputItemPreviewElement>,
    PolymorphicProps {}

export const TagsInputItemPreview = (props: TagsInputItemPreviewProps) => {
  const { ref, ...restProps } = props
  const tagsInput = useTagsInputContext()
  const itemProps = useTagsInputItemPropsContext()
  const mergedProps = mergeProps(tagsInput.getItemPreviewProps(itemProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
