import { createContext } from '@ousia-ui/ark/utils'
import type { ItemState } from '@zag-js/radio-group'

export interface UseSegmentGroupItemContext extends ItemState {}

export const [SegmentGroupItemProvider, useSegmentGroupItemContext] =
  createContext<UseSegmentGroupItemContext>({
    name: 'SegmentGroupItemContext',
    hookName: 'useSegmentGroupItemContext',
    providerName: '<SegmentGroupItemProvider />',
  })
