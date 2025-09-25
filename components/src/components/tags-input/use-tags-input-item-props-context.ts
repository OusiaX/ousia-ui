import type { ItemProps } from '@zag-js/tags-input'
import { createContext } from '@ousia-ui/ark/utils'

export const [TagsInputItemPropsProvider, useTagsInputItemPropsContext] = createContext<ItemProps>({
  name: 'TagsInputItemPropsContext',
  hookName: 'useTagsInputItemPropsContext',
  providerName: '<TagsInputItemPropsProvider />',
})
