import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { MenuItemPropsProvider } from './use-menu-option-item-props-context'
import { useMenuTriggerItemContext } from './use-menu-trigger-item-context'

export const MenuTriggerItemElement = 'div' as const
export interface MenuTriggerItemProps
  extends ComponentProps<typeof MenuTriggerItemElement>,
    PolymorphicProps {}

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
