import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'

export interface MenuPositionerProps extends ComponentProps<'div'>, PolymorphicProps {}

export const MenuPositioner = (props: MenuPositionerProps) => {
  const { ref, ...restProps } = props
  const menu = useMenuContext()
  const mergedProps = mergeProps(menu.getPositionerProps(), restProps)
  const presence = usePresenceContext()

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={ref} />
}
