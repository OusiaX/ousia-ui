import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useFileUploadContext } from './use-file-upload-context'
import { useFileUploadItemPropsContext } from './use-file-upload-item-props-context'

export const FileUploadItemDeleteTriggerElement = 'button' as const
export interface FileUploadItemDeleteTriggerProps
  extends ComponentProps<typeof FileUploadItemDeleteTriggerElement>,
    PolymorphicProps {}

export const FileUploadItemDeleteTrigger = (props: FileUploadItemDeleteTriggerProps) => {
  const { ref, ...restProps } = props
  const fileUpload = useFileUploadContext()
  const itemProps = useFileUploadItemPropsContext()
  const mergedProps = mergeProps(fileUpload.getItemDeleteTriggerProps(itemProps), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
