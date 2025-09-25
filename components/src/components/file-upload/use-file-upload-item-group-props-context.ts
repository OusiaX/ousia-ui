import type { ItemGroupProps } from '@zag-js/file-upload'
import { createContext } from '@ousia-ui/ark/utils'

export interface UseFileUploadItemGroupContext extends ItemGroupProps {}

export const [FileUploadItemGroupPropsProvider, useFileUploadItemGroupPropsContext] =
  createContext<UseFileUploadItemGroupContext>({
    name: 'FileUploadItemGroupPropsContext',
    hookName: 'useFileUploadItemGroupPropsContext',
    providerName: '<FileUploadItemGroupPropsProvider />',
  })
