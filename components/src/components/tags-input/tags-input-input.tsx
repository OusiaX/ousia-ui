import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTagsInputContext } from './use-tags-input-context'

export interface TagsInputInputProps extends ComponentProps<'input'>, PolymorphicProps {}

export const TagsInputInput = (props: TagsInputInputProps) => {
  const { ref, ...restProps } = props
  const tagsInput = useTagsInputContext()
  const mergedProps = mergeProps(tagsInput.getInputProps(), restProps)

  return <ark.input {...mergedProps} ref={ref} />
}
