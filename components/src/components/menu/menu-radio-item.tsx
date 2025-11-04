import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { OptionItemProps } from '@zag-js/menu'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'
import { MenuItemProvider } from './use-menu-item-context'
import { useMenuItemGroupContext } from './use-menu-item-group-context'
import { MenuItemPropsProvider } from './use-menu-option-item-props-context'

type PartialOptionItemProps = Omit<OptionItemProps, 'type' | 'checked' | 'onCheckedChange'>

export interface MenuRadioItemBaseProps extends PartialOptionItemProps, PolymorphicProps {}
export interface MenuRadioItemProps extends ComponentProps<'div'>, MenuRadioItemBaseProps {}

export const MenuRadioItem = (props: MenuRadioItemProps) => {
  const { ref, ...restProps } = props
  const [partialItemProps, localProps] = createSplitProps<PartialOptionItemProps>()(restProps, [
    'closeOnSelect',
    'disabled',
    'value',
    'valueText',
  ])
  const menu = useMenuContext()
  const itemGroup = useMenuItemGroupContext()
  const optionItemProps: OptionItemProps = {
    ...partialItemProps,
    checked: itemGroup.value === partialItemProps.value,
    type: 'radio',
    onCheckedChange: () => itemGroup.onValueChange?.({ value: partialItemProps.value }),
  }
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
