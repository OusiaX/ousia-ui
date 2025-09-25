import { mergeProps } from '@zag-js/react'
import type { ItemGroupProps } from '@zag-js/file-upload'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { arkMemo, type HTMLProps, type PolymorphicProps } from '@ousia-ui/ark'
import { useFileUploadContext } from './use-file-upload-context'
import { FileUploadItemGroupPropsProvider } from './use-file-upload-item-group-props-context'

export interface FileUploadItemGroupBaseProps extends PolymorphicProps, ItemGroupProps {}
export interface FileUploadItemGroupProps extends HTMLProps<'ul'>, FileUploadItemGroupBaseProps {}

export const FileUploadItemGroup = forwardRef<HTMLUListElement, FileUploadItemGroupProps>((props, ref) => {
  const [itemGroupProps, localProps] = createSplitProps<ItemGroupProps>()(props, ['type'])
  const fileUpload = useFileUploadContext()
  const mergedProps = mergeProps(fileUpload.getItemGroupProps(itemGroupProps), localProps)

  return (
    <FileUploadItemGroupPropsProvider value={itemGroupProps}>
      <arkMemo.ul {...mergedProps} ref={ref} />
    </FileUploadItemGroupPropsProvider>
  )
})

FileUploadItemGroup.displayName = 'FileUploadItemGroup'
