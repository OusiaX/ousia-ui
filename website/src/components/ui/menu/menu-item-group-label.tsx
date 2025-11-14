import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'
import { useMenuItemGroupContext } from './use-menu-item-group-context'

export const MenuItemGroupLabelElement = 'div' as const
export interface MenuItemGroupLabelProps
  extends ComponentProps<typeof MenuItemGroupLabelElement>,
    PolymorphicProps {}

export const MenuItemGroupLabel = (props: MenuItemGroupLabelProps) => {
  const { ref, ...restProps } = props
  const menu = useMenuContext()
  const itemGroup = useMenuItemGroupContext()
  const mergedProps = mergeProps(menu.getItemGroupLabelProps({ htmlFor: itemGroup.id }), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
