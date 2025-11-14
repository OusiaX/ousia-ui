import { createContext } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/file-upload'

export interface UseFileUploadItemContext extends ItemProps {}

export const [FileUploadItemPropsProvider, useFileUploadItemPropsContext] =
  createContext<UseFileUploadItemContext>({
    name: 'FileUploadItemPropsContext',
    hookName: 'useFileUploadItemPropsContext',
    providerName: '<FileUploadItemPropsProvider />',
  })
