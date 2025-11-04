import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemGroupProps } from '@zag-js/combobox'
import type { ComponentProps } from 'react'
import { useId } from 'react'
import { useComboboxContext } from './use-combobox-context'
import { ComboboxItemGroupPropsProvider } from './use-combobox-item-group-props-context'

export interface ComboboxItemGroupBaseProps extends PolymorphicProps {}
export interface ComboboxItemGroupProps extends ComponentProps<'div'>, ComboboxItemGroupBaseProps {}

export const ComboboxItemGroup = (props: ComboboxItemGroupProps) => {
  const { ref, ...restProps } = props
  const id = useId()
  const [_itemGroupProps, localProps] = createSplitProps<Partial<ItemGroupProps>>()(restProps, [
    'id',
  ])
  const itemGroupProps = { id, ..._itemGroupProps }

  const combobox = useComboboxContext()
  const mergedProps = mergeProps(combobox.getItemGroupProps(itemGroupProps), localProps)

  return (
    <ComboboxItemGroupPropsProvider value={itemGroupProps}>
      <ark.div {...mergedProps} ref={ref} />
    </ComboboxItemGroupPropsProvider>
  )
}
