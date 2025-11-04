import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'

export interface MenuTriggerBaseProps extends PolymorphicProps {}
export interface MenuTriggerProps extends ComponentProps<'button'>, MenuTriggerBaseProps {}

export const MenuTrigger = (props: MenuTriggerProps) => {
  const { ref, ...restProps } = props
  const menu = useMenuContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(
    {
      ...menu.getTriggerProps(),
      'aria-controls': presence.unmounted ? undefined : menu.getTriggerProps()['aria-controls'],
    },
    restProps,
  )

  return <ark.button {...mergedProps} ref={ref} />
}
