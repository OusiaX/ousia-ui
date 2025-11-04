import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseFileUploadReturn } from './use-file-upload'
import { FileUploadProvider } from './use-file-upload-context'

interface RootProviderProps {
  value: UseFileUploadReturn
}

export interface FileUploadRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface FileUploadRootProviderProps
  extends ComponentProps<'div'>,
    FileUploadRootProviderBaseProps {}

export const FileUploadRootProvider = (props: FileUploadRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: fileUpload }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(fileUpload.getRootProps(), localProps)

  return (
    <FileUploadProvider value={fileUpload}>
      <ark.div {...mergedProps} ref={ref} />
    </FileUploadProvider>
  )
}
