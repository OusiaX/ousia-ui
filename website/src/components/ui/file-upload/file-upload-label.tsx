import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useFileUploadContext } from './use-file-upload-context'

export const FileUploadLabelElement = 'label' as const
export interface FileUploadLabelProps
  extends ComponentProps<typeof FileUploadLabelElement>,
    PolymorphicProps {}

export const FileUploadLabel = (props: FileUploadLabelProps) => {
  const { ref, ...restProps } = props
  const fileUpload = useFileUploadContext()
  const mergedProps = mergeProps(fileUpload.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
