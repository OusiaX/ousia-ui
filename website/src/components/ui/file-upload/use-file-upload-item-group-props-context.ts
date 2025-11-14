import { createContext } from '@ousia-ui/ark/utils'
import type { ItemGroupProps } from '@zag-js/file-upload'

export interface UseFileUploadItemGroupContext extends ItemGroupProps {}

export const [FileUploadItemGroupPropsProvider, useFileUploadItemGroupPropsContext] =
  createContext<UseFileUploadItemGroupContext>({
    name: 'FileUploadItemGroupPropsContext',
    hookName: 'useFileUploadItemGroupPropsContext',
    providerName: '<FileUploadItemGroupPropsProvider />',
  })
