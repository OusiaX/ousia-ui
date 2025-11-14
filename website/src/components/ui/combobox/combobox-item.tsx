import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/combobox'
import type { ComponentProps } from 'react'
import { useComboboxContext } from './use-combobox-context'
import { ComboboxItemProvider } from './use-combobox-item-context'
import { ComboboxItemPropsProvider } from './use-combobox-item-props-context'

export const ComboboxItemElement = 'div' as const
export interface ComboboxItemProps
  extends ComponentProps<typeof ComboboxItemElement>,
    ItemProps,
    PolymorphicProps {}

export const ComboboxItem = (props: ComboboxItemProps) => {
  const { ref, ...restProps } = props
  const [itemProps, localProps] = createSplitProps<ItemProps>()(restProps, ['item', 'persistFocus'])
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(combobox.getItemProps(itemProps), localProps)
  const itemState = combobox.getItemState(itemProps)

  return (
    <ComboboxItemPropsProvider value={itemProps}>
      <ComboboxItemProvider value={itemState}>
        <ark.div {...mergedProps} ref={ref} />
      </ComboboxItemProvider>
    </ComboboxItemPropsProvider>
  )
}
