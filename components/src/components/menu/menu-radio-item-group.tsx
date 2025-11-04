import { type Optional, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useId } from 'react'
import { useMenuContext } from './use-menu-context'
import { MenuItemGroupProvider, type UseMenuItemGroupContext } from './use-menu-item-group-context'

type OptionalUseMenuItemGroupContext = Optional<UseMenuItemGroupContext, 'id'>

export interface MenuRadioItemGroupBaseProps
  extends OptionalUseMenuItemGroupContext,
    PolymorphicProps {}
export interface MenuRadioItemGroupProps
  extends ComponentProps<'div'>,
    MenuRadioItemGroupBaseProps {}

export const MenuRadioItemGroup = (props: MenuRadioItemGroupProps) => {
  const { ref, ...restProps } = props
  const [optionalItemGroupProps, localProps] = createSplitProps<OptionalUseMenuItemGroupContext>()(
    restProps,
    ['id', 'onValueChange', 'value'],
  )
  const menu = useMenuContext()
  const id = useId()
  const itemGroupProps = { id, ...optionalItemGroupProps }
  const mergedProps = mergeProps(menu.getItemGroupProps({ id: itemGroupProps.id }), localProps)

  return (
    <MenuItemGroupProvider value={itemGroupProps}>
      <ark.div {...mergedProps} ref={ref} />
    </MenuItemGroupProvider>
  )
}
