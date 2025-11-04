import { type Optional, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemGroupProps } from '@zag-js/menu'
import type { ComponentProps } from 'react'
import { useId } from 'react'
import { useMenuContext } from './use-menu-context'
import { MenuItemGroupProvider } from './use-menu-item-group-context'

type OptionalItemGroupProps = Optional<ItemGroupProps, 'id'>

export interface MenuItemGroupBaseProps extends OptionalItemGroupProps, PolymorphicProps {}
export interface MenuItemGroupProps extends ComponentProps<'div'>, MenuItemGroupBaseProps {}

export const MenuItemGroup = (props: MenuItemGroupProps) => {
  const { ref, ...restProps } = props
  const [optionalItemGroupProps, localProps] = createSplitProps<OptionalItemGroupProps>()(
    restProps,
    ['id'],
  )
  const menu = useMenuContext()
  const id = useId()
  const itemGroupProps = { id, ...optionalItemGroupProps }
  const mergedProps = mergeProps(menu.getItemGroupProps(itemGroupProps), localProps)

  return (
    <MenuItemGroupProvider value={itemGroupProps}>
      <ark.div {...mergedProps} ref={ref} />
    </MenuItemGroupProvider>
  )
}
