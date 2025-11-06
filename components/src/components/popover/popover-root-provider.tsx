import type { Assigns } from '@ousia-ui/ark'
import {
  PresenceProvider,
  type UsePresenceProps,
  splitPresenceProps,
  usePresence,
} from '@ousia-ui/ark/utils'
import { mergeProps } from '@zag-js/react'
import type { ReactNode } from 'react'
import type { UsePopoverReturn } from './use-popover'
import { PopoverProvider } from './use-popover-context'

interface RootProviderProps {
  value: UsePopoverReturn
}

export type PopoverRootProviderProps = Assigns<
  RootProviderProps,
  UsePresenceProps,
  {
    children?: ReactNode | undefined
  }
>

export const PopoverRootProvider = (props: PopoverRootProviderProps) => {
  const [presenceProps, { value: popover, children }] = splitPresenceProps(props)
  const presence = usePresence(mergeProps({ present: popover.open }, presenceProps))

  return (
    <PopoverProvider value={popover}>
      <PresenceProvider value={presence}>{children}</PresenceProvider>
    </PopoverProvider>
  )
}
