import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { OptionItemProps } from '@zag-js/menu'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'
import { MenuItemProvider } from './use-menu-item-context'
import { MenuItemPropsProvider } from './use-menu-option-item-props-context'

type PartialOptionItemProps = Omit<OptionItemProps, 'type'>

export interface MenuCheckboxItemBaseProps extends PartialOptionItemProps, PolymorphicProps {}
export interface MenuCheckboxItemProps extends ComponentProps<'div'>, MenuCheckboxItemBaseProps {}

export const MenuCheckboxItem = (props: MenuCheckboxItemProps) => {
  const { ref, ...restProps } = props
  const [partialOptionItemProps, localProps] = createSplitProps<PartialOptionItemProps>()(
    restProps,
    ['checked', 'closeOnSelect', 'disabled', 'onCheckedChange', 'value', 'valueText'],
  )
  const optionItemProps: OptionItemProps = {
    ...partialOptionItemProps,
    type: 'checkbox',
  }
  const menu = useMenuContext()
  const mergedProps = mergeProps(menu.getOptionItemProps(optionItemProps), localProps)
  const optionItemState = menu.getOptionItemState(optionItemProps)

  return (
    <MenuItemPropsProvider value={optionItemProps}>
      <MenuItemProvider value={optionItemState}>
        <ark.div {...mergedProps} ref={ref} />
      </MenuItemProvider>
    </MenuItemPropsProvider>
  )
}
