import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { MenuItemPropsProvider } from './use-menu-option-item-props-context'
import { useMenuTriggerItemContext } from './use-menu-trigger-item-context'

export interface MenuTriggerItemBaseProps extends PolymorphicProps {}
export interface MenuTriggerItemProps extends ComponentProps<'div'>, MenuTriggerItemBaseProps {}

export const MenuTriggerItem = (props: MenuTriggerItemProps) => {
  const { ref, ...restProps } = props
  const getTriggerItemProps = useMenuTriggerItemContext()
  const mergedProps = mergeProps(getTriggerItemProps?.() ?? {}, restProps)

  const dataValue = (mergedProps as { 'data-value'?: string })['data-value'] ?? ''

  return (
    <MenuItemPropsProvider value={{ value: dataValue }}>
      <ark.div {...mergedProps} ref={ref} />
    </MenuItemPropsProvider>
  )
}
