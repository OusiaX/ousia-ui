import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { DropzoneProps } from '@zag-js/file-upload'
import type { ComponentProps } from 'react'
import { useFileUploadContext } from './use-file-upload-context'

export const FileUploadDropzoneElement = 'div' as const
export interface FileUploadDropzoneProps
  extends ComponentProps<typeof FileUploadDropzoneElement>,
    PolymorphicProps,
    DropzoneProps {}

export const FileUploadDropzone = (props: FileUploadDropzoneProps) => {
  const { ref, ...restProps } = props
  const [dropzoneProps, localProps] = createSplitProps<DropzoneProps>()(restProps, ['disableClick'])
  const fileUpload = useFileUploadContext()
  const mergedProps = mergeProps(fileUpload.getDropzoneProps(dropzoneProps), localProps)

  return <ark.div {...mergedProps} ref={ref} />
}
