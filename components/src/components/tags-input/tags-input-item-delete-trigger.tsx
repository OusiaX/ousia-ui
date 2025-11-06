import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTagsInputContext } from './use-tags-input-context'
import { useTagsInputItemPropsContext } from './use-tags-input-item-props-context'

export const TagsInputItemDeleteTriggerElement = 'button' as const
export interface TagsInputItemDeleteTriggerProps
  extends ComponentProps<typeof TagsInputItemDeleteTriggerElement>,
    PolymorphicProps {}

export const TagsInputItemDeleteTrigger = (props: TagsInputItemDeleteTriggerProps) => {
  const { ref, ...restProps } = props
  const tagsInput = useTagsInputContext()
  const itemProps = useTagsInputItemPropsContext()
  const mergedProps = mergeProps(tagsInput.getItemDeleteTriggerProps(itemProps), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
