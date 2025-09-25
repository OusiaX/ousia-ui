import { createContext } from '@ousia-ui/ark/utils'
import type { UseSliderReturn } from './use-slider'

export interface UseSliderContext extends UseSliderReturn {}

export const [SliderProvider, useSliderContext] = createContext<UseSliderContext>({
  name: 'SliderContext',
  hookName: 'useSliderContext',
  providerName: '<SliderProvider />',
})
