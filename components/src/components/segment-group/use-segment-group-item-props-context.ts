import type { ItemProps } from '@zag-js/radio-group'
import { createContext } from '@ousia-ui/ark/utils'

export const [SegmentGroupItemPropsProvider, useSegmentGroupItemPropsContext] = createContext<ItemProps>({
  name: 'SegmentGroupItemPropsContext',
  hookName: 'useSegmentGroupItemPropsContext',
  providerName: '<SegmentGroupItemPropsProvider />',
})
