import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'

export interface MenuIndicatorBaseProps extends PolymorphicProps {}
export interface MenuIndicatorProps extends ComponentProps<'div'>, MenuIndicatorBaseProps {}

export const MenuIndicator = (props: MenuIndicatorProps) => {
  const { ref, ...restProps } = props
  const menu = useMenuContext()
  const mergedProps = mergeProps(menu.getIndicatorProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
