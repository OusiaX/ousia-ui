import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTagsInputContext } from './use-tags-input-context'
import { useTagsInputItemPropsContext } from './use-tags-input-item-props-context'

export interface TagsInputItemDeleteTriggerBaseProps extends PolymorphicProps {}
export interface TagsInputItemDeleteTriggerProps
  extends ComponentProps<'button'>,
    TagsInputItemDeleteTriggerBaseProps {}

export const TagsInputItemDeleteTrigger = (props: TagsInputItemDeleteTriggerProps) => {
  const { ref, ...restProps } = props
  const tagsInput = useTagsInputContext()
  const itemProps = useTagsInputItemPropsContext()
  const mergedProps = mergeProps(tagsInput.getItemDeleteTriggerProps(itemProps), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
