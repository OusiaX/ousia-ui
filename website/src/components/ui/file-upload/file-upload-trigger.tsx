import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useFileUploadContext } from './use-file-upload-context'

export const FileUploadTriggerElement = 'button' as const
export interface FileUploadTriggerProps
  extends ComponentProps<typeof FileUploadTriggerElement>,
    PolymorphicProps {}

export const FileUploadTrigger = (props: FileUploadTriggerProps) => {
  const { ref, ...restProps } = props
  const fileUpload = useFileUploadContext()
  const mergedProps = mergeProps(fileUpload.getTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
