import { createContext } from '@ousia-ui/ark/utils'
import type { ThumbProps } from '@zag-js/slider'

export const [SliderThumbPropsProvider, useSliderThumbPropsContext] = createContext<ThumbProps>({
  name: 'SliderThumbPropsContext',
  hookName: 'useSliderThumbPropsContext',
  providerName: '<SliderThumbPropsProvider />',
})
