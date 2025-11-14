import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useTagsInputContext } from './use-tags-input-context'

export const TagsInputHiddenInputElement = 'input' as const
export interface TagsInputHiddenInputProps
  extends ComponentProps<typeof TagsInputHiddenInputElement>,
    PolymorphicProps {}

export const TagsInputHiddenInput = (props: TagsInputHiddenInputProps) => {
  const { ref, ...restProps } = props
  const tagsInput = useTagsInputContext()
  const mergedProps = mergeProps(tagsInput.getHiddenInputProps(), restProps)
  const field = useFieldContext()

  return <ark.input aria-describedby={field?.ariaDescribedby} {...mergedProps} ref={ref} />
}
