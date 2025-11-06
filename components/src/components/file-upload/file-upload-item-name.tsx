import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useFileUploadContext } from './use-file-upload-context'
import { useFileUploadItemPropsContext } from './use-file-upload-item-props-context'

export const FileUploadItemNameElement = 'div' as const
export interface FileUploadItemNameProps
  extends ComponentProps<typeof FileUploadItemNameElement>,
    PolymorphicProps {}

export const FileUploadItemName = (props: FileUploadItemNameProps) => {
  const { ref, ...restProps } = props
  const { children, ...rest } = restProps
  const fileUpload = useFileUploadContext()
  const itemProps = useFileUploadItemPropsContext()
  const mergedProps = mergeProps(fileUpload.getItemNameProps(itemProps), rest)

  return (
    <ark.div {...mergedProps} ref={ref}>
      {children || itemProps.file.name}
    </ark.div>
  )
}
