import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLProps, type PolymorphicProps } from '@ousia-ui/ark'
import { useFileUploadContext } from './use-file-upload-context'

export interface FileUploadClearTriggerBaseProps extends PolymorphicProps {}
export interface FileUploadClearTriggerProps extends HTMLProps<'button'>, FileUploadClearTriggerBaseProps {}

export const FileUploadClearTrigger = forwardRef<HTMLButtonElement, FileUploadClearTriggerProps>((props, ref) => {
  const fileUpload = useFileUploadContext()
  const mergedProps = mergeProps(fileUpload.getClearTriggerProps(), props)

  return <ark.button {...mergedProps} ref={ref} />
})

FileUploadClearTrigger.displayName = 'FileUploadClearTrigger'
