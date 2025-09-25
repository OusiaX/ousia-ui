import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { useMenuContext } from './use-menu-context'
import { useMenuItemPropsContext } from './use-menu-option-item-props-context'

export interface MenuItemIndicatorBaseProps {}
export interface MenuItemIndicatorProps extends HTMLProps<'div'>, MenuItemIndicatorBaseProps {}

export const MenuItemIndicator = forwardRef<HTMLDivElement, MenuItemIndicatorProps>((props, ref) => {
  const menu = useMenuContext()
  const itemProps = useMenuItemPropsContext()
  const mergedProps = mergeProps(menu.getItemIndicatorProps(itemProps), props)

  return <arkSimple.div {...mergedProps} ref={ref} />
})

MenuItemIndicator.displayName = 'MenuItemIndicator'
