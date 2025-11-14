import { createContext } from '@ousia-ui/ark/utils'
import type { ItemState } from '@zag-js/tags-input'

export interface UseTagsInputItemContext extends ItemState {}

export const [TagsInputItemProvider, useTagsInputItemContext] =
  createContext<UseTagsInputItemContext>({
    name: 'TagsInputItemContext',
    hookName: 'useTagsInputItemContext',
    providerName: '<TagsInputItemProvider />',
  })
