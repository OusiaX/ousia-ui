import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'

export interface MenuArrowTipBaseProps extends PolymorphicProps {}
export interface MenuArrowTipProps extends ComponentProps<'div'>, MenuArrowTipBaseProps {}

export const MenuArrowTip = (props: MenuArrowTipProps) => {
  const { ref, ...restProps } = props
  const menu = useMenuContext()
  const mergedProps = mergeProps(menu.getArrowTipProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
