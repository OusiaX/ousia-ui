import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'

export const MenuIndicatorElement = 'div' as const
export interface MenuIndicatorProps
  extends ComponentProps<typeof MenuIndicatorElement>,
    PolymorphicProps {}

export const MenuIndicator = (props: MenuIndicatorProps) => {
  const { ref, ...restProps } = props
  const menu = useMenuContext()
  const mergedProps = mergeProps(menu.getIndicatorProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
