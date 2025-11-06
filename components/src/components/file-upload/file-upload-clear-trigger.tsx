import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useFileUploadContext } from './use-file-upload-context'

export const FileUploadClearTriggerElement = 'button' as const
export interface FileUploadClearTriggerProps
  extends ComponentProps<typeof FileUploadClearTriggerElement>,
    PolymorphicProps {}

export const FileUploadClearTrigger = (props: FileUploadClearTriggerProps) => {
  const { ref, ...restProps } = props
  const fileUpload = useFileUploadContext()
  const mergedProps = mergeProps(fileUpload.getClearTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
