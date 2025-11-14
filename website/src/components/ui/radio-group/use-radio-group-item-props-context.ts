import { createContext } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/radio-group'

export const [RadioGroupItemPropsProvider, useRadioGroupItemPropsContext] =
  createContext<ItemProps>({
    name: 'RadioGroupItemPropsContext',
    hookName: 'useRadioGroupItemPropsContext',
    providerName: '<RadioGroupItemPropsProvider />',
  })
