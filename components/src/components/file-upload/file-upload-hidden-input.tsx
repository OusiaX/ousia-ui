import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useFileUploadContext } from './use-file-upload-context'

export interface FileUploadHiddenInputProps extends ComponentProps<'input'>, PolymorphicProps {}

export const FileUploadHiddenInput = (props: FileUploadHiddenInputProps) => {
  const { ref, ...restProps } = props
  const fileUpload = useFileUploadContext()
  const mergedProps = mergeProps(fileUpload.getHiddenInputProps(), restProps)
  const field = useFieldContext()

  return <ark.input aria-describedby={field?.ariaDescribedby} {...mergedProps} ref={ref} />
}
