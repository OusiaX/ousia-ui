import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useFileUploadContext } from './use-file-upload-context'
import { useFileUploadItemPropsContext } from './use-file-upload-item-props-context'

export const FileUploadItemSizeTextElement = 'div' as const
export interface FileUploadItemSizeTextProps
  extends ComponentProps<typeof FileUploadItemSizeTextElement>,
    PolymorphicProps {}

export const FileUploadItemSizeText = (props: FileUploadItemSizeTextProps) => {
  const { ref, ...restProps } = props
  const { children, ...rest } = restProps
  const fileUpload = useFileUploadContext()
  const itemProps = useFileUploadItemPropsContext()
  const mergedProps = mergeProps(fileUpload.getItemSizeTextProps(itemProps), rest)

  return (
    <ark.div {...mergedProps} ref={ref}>
      {children || fileUpload.getFileSize(itemProps.file)}
    </ark.div>
  )
}
