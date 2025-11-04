import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemGroupProps } from '@zag-js/file-upload'
import type { ComponentProps } from 'react'
import { useFileUploadContext } from './use-file-upload-context'
import { FileUploadItemGroupPropsProvider } from './use-file-upload-item-group-props-context'

export interface FileUploadItemGroupBaseProps extends PolymorphicProps, ItemGroupProps {}
export interface FileUploadItemGroupProps
  extends ComponentProps<'ul'>,
    FileUploadItemGroupBaseProps {}

export const FileUploadItemGroup = (props: FileUploadItemGroupProps) => {
  const { ref, ...restProps } = props
  const [itemGroupProps, localProps] = createSplitProps<ItemGroupProps>()(restProps, ['type'])
  const fileUpload = useFileUploadContext()
  const mergedProps = mergeProps(fileUpload.getItemGroupProps(itemGroupProps), localProps)

  return (
    <FileUploadItemGroupPropsProvider value={itemGroupProps}>
      <ark.ul {...mergedProps} ref={ref} />
    </FileUploadItemGroupPropsProvider>
  )
}
