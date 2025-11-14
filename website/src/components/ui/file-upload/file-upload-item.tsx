import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/file-upload'
import type { ComponentProps } from 'react'
import { useFileUploadContext } from './use-file-upload-context'
import { useFileUploadItemGroupPropsContext } from './use-file-upload-item-group-props-context'
import { FileUploadItemPropsProvider } from './use-file-upload-item-props-context'

type ItemBaseProps = Omit<ItemProps, 'type'>

export const FileUploadItemElement = 'li' as const
export interface FileUploadItemProps
  extends ComponentProps<typeof FileUploadItemElement>,
    ItemBaseProps,
    PolymorphicProps {}

export const FileUploadItem = (props: FileUploadItemProps) => {
  const { ref, ...restProps } = props
  const [itemProps, localProps] = createSplitProps<ItemBaseProps>()(restProps, ['file'])
  const fileUpload = useFileUploadContext()

  const itemGroupProps = useFileUploadItemGroupPropsContext()
  const itemPropsWithType = { ...itemProps, type: itemGroupProps.type }

  const mergedProps = mergeProps(fileUpload.getItemProps(itemPropsWithType), localProps)

  return (
    <FileUploadItemPropsProvider value={itemPropsWithType}>
      <ark.li {...mergedProps} ref={ref} />
    </FileUploadItemPropsProvider>
  )
}
