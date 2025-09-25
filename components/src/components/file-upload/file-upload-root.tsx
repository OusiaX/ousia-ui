import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { arkMemo, type HTMLProps, type PolymorphicProps } from '@ousia-ui/ark'
import type { UseFileUploadProps } from './use-file-upload'
import { useFileUpload } from './use-file-upload'
import { FileUploadProvider } from './use-file-upload-context'

export interface FileUploadRootBaseProps extends UseFileUploadProps, PolymorphicProps {}
export interface FileUploadRootProps extends HTMLProps<'div'>, FileUploadRootBaseProps {}

export const FileUploadRoot = forwardRef<HTMLDivElement, FileUploadRootProps>((props, ref) => {
  const [useFileUploadProps, localProps] = createSplitProps<UseFileUploadProps>()(props, [
    'accept',
    'acceptedFiles',
    'allowDrop',
    'capture',
    'defaultAcceptedFiles',
    'directory',
    'disabled',
    'id',
    'ids',
    'invalid',
    'locale',
    'maxFiles',
    'maxFileSize',
    'minFileSize',
    'name',
    'onFileAccept',
    'onFileChange',
    'onFileReject',
    'preventDocumentDrop',
    'required',
    'translations',
    'transformFiles',
    'validate',
  ])
  const fileUpload = useFileUpload(useFileUploadProps)
  const mergedProps = mergeProps(fileUpload.getRootProps(), localProps)

  return (
    <FileUploadProvider value={fileUpload}>
      <arkMemo.div {...mergedProps} ref={ref} />
    </FileUploadProvider>
  )
})

FileUploadRoot.displayName = 'FileUploadRoot'
