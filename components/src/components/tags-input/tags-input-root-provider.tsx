import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkSimple } from '@ousia-ui/ark'
import type { UseTagsInputReturn } from './use-tags-input'
import { TagsInputProvider } from './use-tags-input-context'

interface RootProviderProps {
  value: UseTagsInputReturn
}

export interface TagsInputRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface TagsInputRootProviderProps extends HTMLProps<'div'>, TagsInputRootProviderBaseProps {}

export const TagsInputRootProvider = forwardRef<HTMLDivElement, TagsInputRootProviderProps>((props, ref) => {
  const [{ value: tagsInput }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(tagsInput.getRootProps(), localProps)

  return (
    <TagsInputProvider value={tagsInput}>
      <arkSimple.div {...mergedProps} ref={ref} />
    </TagsInputProvider>
  )
})

TagsInputRootProvider.displayName = 'TagsInputRootProvider'
