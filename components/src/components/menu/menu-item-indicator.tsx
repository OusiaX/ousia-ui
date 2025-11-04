import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'
import { useMenuItemPropsContext } from './use-menu-option-item-props-context'

export interface MenuItemIndicatorProps extends ComponentProps<'div'>, PolymorphicProps {}

export const MenuItemIndicator = (props: MenuItemIndicatorProps) => {
  const { ref, ...restProps } = props
  const menu = useMenuContext()
  const itemProps = useMenuItemPropsContext()
  const mergedProps = mergeProps(menu.getItemIndicatorProps(itemProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
