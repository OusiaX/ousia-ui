import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseFileUploadProps } from './use-file-upload'
import { useFileUpload } from './use-file-upload'
import { FileUploadProvider } from './use-file-upload-context'

export const FileUploadRootElement = 'div' as const
export type FileUploadRootProps = Assigns<
  ComponentProps<typeof FileUploadRootElement>,
  UseFileUploadProps,
  PolymorphicProps
>

export const FileUploadRoot = (props: FileUploadRootProps) => {
  const { ref, ...restProps } = props
  const [useFileUploadProps, localProps] = createSplitProps<UseFileUploadProps>()(restProps, [
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
      <ark.div {...mergedProps} ref={ref} />
    </FileUploadProvider>
  )
}
