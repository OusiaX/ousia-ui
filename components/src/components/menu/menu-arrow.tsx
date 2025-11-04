import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'

export interface MenuArrowProps extends ComponentProps<'div'>, PolymorphicProps {}

export const MenuArrow = (props: MenuArrowProps) => {
  const { ref, ...restProps } = props
  const menu = useMenuContext()
  const mergedProps = mergeProps(menu.getArrowProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
