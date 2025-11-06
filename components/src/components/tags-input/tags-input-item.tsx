import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/tags-input'
import type { ComponentProps } from 'react'
import { useTagsInputContext } from './use-tags-input-context'
import { TagsInputItemProvider } from './use-tags-input-item-context'
import { TagsInputItemPropsProvider } from './use-tags-input-item-props-context'

export const TagsInputItemElement = 'div' as const
export interface TagsInputItemProps
  extends ComponentProps<typeof TagsInputItemElement>,
    ItemProps,
    PolymorphicProps {}

export const TagsInputItem = (props: TagsInputItemProps) => {
  const { ref, ...restProps } = props
  const [itemProps, localProps] = createSplitProps<ItemProps>()(restProps, [
    'index',
    'disabled',
    'value',
  ])
  const tagsInput = useTagsInputContext()
  const mergedProps = mergeProps(tagsInput.getItemProps(itemProps), localProps)
  const tagsInputItem = tagsInput.getItemState(itemProps)

  return (
    <TagsInputItemPropsProvider value={itemProps}>
      <TagsInputItemProvider value={tagsInputItem}>
        <ark.div {...mergedProps} ref={ref} />
      </TagsInputItemProvider>
    </TagsInputItemPropsProvider>
  )
}
