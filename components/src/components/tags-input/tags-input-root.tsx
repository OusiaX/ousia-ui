import { type Assign, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseTagsInputProps, useTagsInput } from './use-tags-input'
import { TagsInputProvider } from './use-tags-input-context'

export interface TagsInputRootBaseProps extends UseTagsInputProps, PolymorphicProps {}
export interface TagsInputRootProps extends Assign<ComponentProps<'div'>, TagsInputRootBaseProps> {}

export const TagsInputRoot = (props: TagsInputRootProps) => {
  const { ref, ...restProps } = props
  const [useTagsInputProps, localProps] = createSplitProps<UseTagsInputProps>()(restProps, [
    'addOnPaste',
    'allowOverflow',
    'autoFocus',
    'blurBehavior',
    'defaultInputValue',
    'defaultValue',
    'delimiter',
    'disabled',
    'editable',
    'form',
    'id',
    'ids',
    'inputValue',
    'invalid',
    'max',
    'maxLength',
    'name',
    'onFocusOutside',
    'onHighlightChange',
    'onInputValueChange',
    'onInteractOutside',
    'onPointerDownOutside',
    'onValueChange',
    'onValueInvalid',
    'readOnly',
    'required',
    'translations',
    'validate',
    'value',
  ])
  const tagsInput = useTagsInput(useTagsInputProps)
  const mergedProps = mergeProps(tagsInput.getRootProps(), localProps)

  return (
    <TagsInputProvider value={tagsInput}>
      <ark.div {...mergedProps} ref={ref} />
    </TagsInputProvider>
  )
}
