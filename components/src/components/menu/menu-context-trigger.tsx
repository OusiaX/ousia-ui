import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'

export const MenuContextTriggerElement = 'button' as const
export interface MenuContextTriggerProps
  extends ComponentProps<typeof MenuContextTriggerElement>,
    PolymorphicProps {}

export const MenuContextTrigger = (props: MenuContextTriggerProps) => {
  const { ref, ...restProps } = props
  const menu = useMenuContext()
  const mergedProps = mergeProps(menu.getContextTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
