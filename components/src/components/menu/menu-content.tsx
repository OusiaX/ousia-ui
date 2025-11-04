import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { composeRefs, usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'

export interface MenuContentBaseProps extends PolymorphicProps {}
export interface MenuContentProps extends ComponentProps<'div'>, MenuContentBaseProps {}

export const MenuContent = (props: MenuContentProps) => {
  const { ref, ...restProps } = props
  const menu = useMenuContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(menu.getContentProps(), presence.getPresenceProps(), restProps)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
}
