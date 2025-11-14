import { createContext } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/radio-group'

export const [SegmentGroupItemPropsProvider, useSegmentGroupItemPropsContext] =
  createContext<ItemProps>({
    name: 'SegmentGroupItemPropsContext',
    hookName: 'useSegmentGroupItemPropsContext',
    providerName: '<SegmentGroupItemPropsProvider />',
  })
