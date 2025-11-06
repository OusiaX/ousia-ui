import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useTagsInputContext } from './use-tags-input-context'

export const TagsInputControlElement = 'div' as const
export interface TagsInputControlProps
  extends ComponentProps<typeof TagsInputControlElement>,
    PolymorphicProps {}

export const TagsInputControl = (props: TagsInputControlProps) => {
  const { ref, ...restProps } = props
  const tagsInput = useTagsInputContext()
  const mergedProps = mergeProps(tagsInput.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
