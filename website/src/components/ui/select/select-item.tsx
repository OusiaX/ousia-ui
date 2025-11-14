import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/select'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'
import { SelectItemProvider } from './use-select-item-context'
import { SelectItemPropsProvider } from './use-select-item-props-context'

export const SelectItemElement = 'div' as const
export interface SelectItemProps
  extends ComponentProps<typeof SelectItemElement>,
    ItemProps,
    PolymorphicProps {}

export const SelectItem = (props: SelectItemProps) => {
  const { ref, ...restProps } = props
  const [itemProps, localProps] = createSplitProps<ItemProps>()(restProps, ['item', 'persistFocus'])
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getItemProps(itemProps), localProps)
  const itemState = select.getItemState(itemProps)

  return (
    <SelectItemPropsProvider value={itemProps}>
      <SelectItemProvider value={itemState}>
        <ark.div {...mergedProps} ref={ref} />
      </SelectItemProvider>
    </SelectItemPropsProvider>
  )
}
