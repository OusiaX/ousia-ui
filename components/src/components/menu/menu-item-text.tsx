import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'
import { useMenuItemPropsContext } from './use-menu-option-item-props-context'

export interface MenuItemTextBaseProps extends PolymorphicProps {}
export interface MenuItemTextProps extends ComponentProps<'div'>, MenuItemTextBaseProps {}

export const MenuItemText = (props: MenuItemTextProps) => {
  const { ref, ...restProps } = props
  const menu = useMenuContext()
  const itemProps = useMenuItemPropsContext()
  const mergedProps = mergeProps(menu.getItemTextProps(itemProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
