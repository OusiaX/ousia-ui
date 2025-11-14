import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'

export const MenuArrowTipElement = 'div' as const
export interface MenuArrowTipProps
  extends ComponentProps<typeof MenuArrowTipElement>,
    PolymorphicProps {}

export const MenuArrowTip = (props: MenuArrowTipProps) => {
  const { ref, ...restProps } = props
  const menu = useMenuContext()
  const mergedProps = mergeProps(menu.getArrowTipProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
