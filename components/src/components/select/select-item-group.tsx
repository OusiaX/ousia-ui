import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemGroupProps } from '@zag-js/select'
import type { ComponentProps } from 'react'
import { useId } from 'react'
import { useSelectContext } from './use-select-context'
import { SelectItemGroupPropsProvider } from './use-select-item-group-props'

export const SelectItemGroupElement = 'div' as const
export interface SelectItemGroupProps
  extends ComponentProps<typeof SelectItemGroupElement>,
    PolymorphicProps {}

export const SelectItemGroup = (props: SelectItemGroupProps) => {
  const { ref, ...restProps } = props
  const id = useId()
  const [_itemGroupProps, localProps] = createSplitProps<Partial<ItemGroupProps>>()(restProps, [
    'id',
  ])
  const itemGroupProps = { id, ..._itemGroupProps }

  const select = useSelectContext()
  const mergedProps = mergeProps(select.getItemGroupProps(itemGroupProps), localProps)

  return (
    <SelectItemGroupPropsProvider value={itemGroupProps}>
      <ark.div {...mergedProps} ref={ref} />
    </SelectItemGroupPropsProvider>
  )
}
