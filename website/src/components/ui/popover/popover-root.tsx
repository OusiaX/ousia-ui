import type { Assigns } from '@ousia-ui/ark'
import {
  PresenceProvider,
  type UsePresenceProps,
  splitPresenceProps,
  usePresence,
} from '@ousia-ui/ark/utils'
import { mergeProps } from '@zag-js/react'
import type { ReactNode } from 'react'
import { type UsePopoverProps, usePopover } from './use-popover'
import { PopoverProvider } from './use-popover-context'

export type PopoverRootProps = Assigns<
  UsePopoverProps,
  UsePresenceProps,
  {
    children?: ReactNode | undefined
  }
>

export const PopoverRoot = (props: PopoverRootProps) => {
  const [presenceProps, { children, ...localProps }] = splitPresenceProps(props)
  const popover = usePopover(localProps)
  const presence = usePresence(mergeProps({ present: popover.open }, presenceProps))

  return (
    <PopoverProvider value={popover}>
      <PresenceProvider value={presence}>{children}</PresenceProvider>
    </PopoverProvider>
  )
}
