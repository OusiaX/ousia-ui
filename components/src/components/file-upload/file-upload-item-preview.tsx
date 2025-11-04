import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useFileUploadContext } from './use-file-upload-context'
import { useFileUploadItemPropsContext } from './use-file-upload-item-props-context'

export interface FileUploadItemPreviewBaseProps extends PolymorphicProps {
  /**
   * The file type to match against. Matches all file types by default.
   * @default '.*'
   */
  type?: string | undefined
}
export interface FileUploadItemPreviewProps
  extends ComponentProps<'div'>,
    FileUploadItemPreviewBaseProps {}

export const FileUploadItemPreview = (props: FileUploadItemPreviewProps) => {
  const { ref, ...restProps } = props
  const fileUpload = useFileUploadContext()
  const itemProps = useFileUploadItemPropsContext()
  const mergedProps = mergeProps(fileUpload.getItemPreviewProps(itemProps), restProps)

  if (!itemProps.file.type.match(restProps.type ?? '.*')) return null

  return <ark.div {...mergedProps} ref={ref} />
}
