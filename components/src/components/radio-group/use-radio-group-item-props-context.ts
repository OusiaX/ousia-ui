import type { ItemProps } from '@zag-js/radio-group'
import { createContext } from '@ousia-ui/ark/utils'

export const [RadioGroupItemPropsProvider, useRadioGroupItemPropsContext] = createContext<ItemProps>({
  name: 'RadioGroupItemPropsContext',
  hookName: 'useRadioGroupItemPropsContext',
  providerName: '<RadioGroupItemPropsProvider />',
})
