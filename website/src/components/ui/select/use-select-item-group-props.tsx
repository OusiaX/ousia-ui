import { createContext } from '@ousia-ui/ark/utils'
import type { ItemGroupProps } from '@zag-js/select'

export interface UseSelectItemGroupPropsContext extends ItemGroupProps {}

export const [SelectItemGroupPropsProvider, useSelectItemGroupPropsContext] =
  createContext<ItemGroupProps>({
    name: 'SelectItemGroupPropsContext',
    hookName: 'useSelectItemGroupPropsContext',
    providerName: '<SelectItemGroupPropsProvider />',
  })
