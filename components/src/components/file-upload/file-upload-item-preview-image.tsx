import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useEffect, useState } from 'react'
import { useFileUploadContext } from './use-file-upload-context'
import { useFileUploadItemPropsContext } from './use-file-upload-item-props-context'

export interface FileUploadItemPreviewImageProps extends ComponentProps<'img'>, PolymorphicProps {}

export const FileUploadItemPreviewImage = (props: FileUploadItemPreviewImageProps) => {
  const { ref, ...restProps } = props
  const [url, setUrl] = useState<string>('')
  const fileUpload = useFileUploadContext()
  const itemProps = useFileUploadItemPropsContext()
  const mergedProps = mergeProps(
    fileUpload.getItemPreviewImageProps({ ...itemProps, url }),
    restProps,
  )

  useEffect(() => {
    return fileUpload.createFileUrl(itemProps.file, (url) => setUrl(url))
  }, [itemProps, fileUpload])

  if (!url) return null

  return <ark.img {...mergedProps} ref={ref} />
}
