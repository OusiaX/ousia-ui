import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTagsInputContext } from './use-tags-input-context'
import { useTagsInputItemPropsContext } from './use-tags-input-item-props-context'

export const TagsInputItemTextElement = 'span' as const
export interface TagsInputItemTextProps
  extends ComponentProps<typeof TagsInputItemTextElement>,
    PolymorphicProps {}

export const TagsInputItemText = (props: TagsInputItemTextProps) => {
  const { ref, ...restProps } = props
  const tagsInput = useTagsInputContext()
  const itemProps = useTagsInputItemPropsContext()
  const mergedProps = mergeProps(tagsInput.getItemTextProps(itemProps), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
