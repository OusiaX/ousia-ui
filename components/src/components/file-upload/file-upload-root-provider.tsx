import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { arkMemo, type HTMLProps, type PolymorphicProps } from '@ousia-ui/ark'
import type { UseFileUploadReturn } from './use-file-upload'
import { FileUploadProvider } from './use-file-upload-context'

interface RootProviderProps {
  value: UseFileUploadReturn
}

export interface FileUploadRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface FileUploadRootProviderProps extends HTMLProps<'div'>, FileUploadRootProviderBaseProps {}

export const FileUploadRootProvider = forwardRef<HTMLDivElement, FileUploadRootProviderProps>((props, ref) => {
  const [{ value: fileUpload }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(fileUpload.getRootProps(), localProps)

  return (
    <FileUploadProvider value={fileUpload}>
      <arkMemo.div {...mergedProps} ref={ref} />
    </FileUploadProvider>
  )
})

FileUploadRootProvider.displayName = 'FileUploadRootProvider'
