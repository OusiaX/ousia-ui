import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTagsInputContext } from './use-tags-input-context'

export interface TagsInputClearTriggerProps extends ComponentProps<'button'>, PolymorphicProps {}

export const TagsInputClearTrigger = (props: TagsInputClearTriggerProps) => {
  const { ref, ...restProps } = props
  const tagsInput = useTagsInputContext()
  const mergedProps = mergeProps(tagsInput.getClearTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
