import { createContext } from '@ousia-ui/ark/utils'
import type { AreaProps } from '@zag-js/color-picker'

export interface UseColorPickerAreaPropsContext extends AreaProps {}

export const [ColorPickerAreaPropsProvider, useColorPickerAreaPropsContext] =
  createContext<UseColorPickerAreaPropsContext>({
    name: 'ColorPickerAreaContext',
    hookName: 'useColorPickerAreaContext',
    providerName: '<ColorPickerAreaProvider />',
  })
