import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import { useMenuContext } from './use-menu-context'

export interface MenuTriggerBaseProps extends PolymorphicProps {}
export interface MenuTriggerProps extends HTMLProps<'button'>, MenuTriggerBaseProps {}

export const MenuTrigger = forwardRef<HTMLButtonElement, MenuTriggerProps>((props, ref) => {
  const menu = useMenuContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(
    {
      ...menu.getTriggerProps(),
      'aria-controls': presence.unmounted ? undefined : menu.getTriggerProps()['aria-controls'],
    },
    props,
  )

  return <arkMemo.button {...mergedProps} ref={ref} />
})

MenuTrigger.displayName = 'MenuTrigger'
