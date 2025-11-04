import { type Assign, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/menu'
import type { ComponentProps } from 'react'
import { useEffect } from 'react'
import { useMenuContext } from './use-menu-context'
import { MenuItemProvider } from './use-menu-item-context'
import { MenuItemPropsProvider } from './use-menu-option-item-props-context'

interface ItemBaseProps extends ItemProps {
  /**
   * The function to call when the item is selected
   */
  onSelect?: VoidFunction | undefined
}

export interface MenuItemBaseProps extends ItemBaseProps, PolymorphicProps {}

export interface MenuItemProps extends Assign<ComponentProps<'div'>, MenuItemBaseProps> {}

export const MenuItem = (props: MenuItemProps) => {
  const { ref, ...restProps } = props
  const [itemProps, localProps] = createSplitProps<ItemBaseProps>()(restProps, [
    'closeOnSelect',
    'disabled',
    'value',
    'valueText',
    'onSelect',
  ])

  const menu = useMenuContext()
  const mergedProps = mergeProps(menu.getItemProps(itemProps), localProps)
  const itemState = menu.getItemState(itemProps)

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional
  useEffect(() => {
    return menu.addItemListener({ id: itemState.id, onSelect: itemProps.onSelect })
  }, [itemState.id, itemProps.onSelect])

  return (
    <MenuItemPropsProvider value={itemProps}>
      <MenuItemProvider value={itemState}>
        <ark.div {...mergedProps} ref={ref} />
      </MenuItemProvider>
    </MenuItemPropsProvider>
  )
}
