import { createContext } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/tags-input'

export const [TagsInputItemPropsProvider, useTagsInputItemPropsContext] = createContext<ItemProps>({
  name: 'TagsInputItemPropsContext',
  hookName: 'useTagsInputItemPropsContext',
  providerName: '<TagsInputItemPropsProvider />',
})
