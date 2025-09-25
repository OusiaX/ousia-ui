import type { ColorFormat } from '@zag-js/color-picker'
import { createContext } from '@ousia-ui/ark/utils'

export interface UseColorPickerSwatchPropsContext {
  format: ColorFormat
}

export const [ColorPickerFormatPropsProvider, useColorPickerFormatPropsContext] =
  createContext<UseColorPickerSwatchPropsContext>({
    name: 'ColorPickerFormatContext',
    hookName: 'useColorPickerFormatPropsContext',
    providerName: '<ColorPickerFormatPropsProvider />',
    strict: false,
  })
