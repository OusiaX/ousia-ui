import type { Assigns } from '@ousia-ui/ark'
import {
  PresenceProvider,
  type UsePresenceProps,
  splitPresenceProps,
  usePresence,
} from '@ousia-ui/ark/utils'
import { mergeProps } from '@zag-js/react'
import type { ReactNode } from 'react'
import type { UseHoverCardReturn } from './use-hover-card'
import { HoverCardProvider } from './use-hover-card-context'

interface RootProviderProps {
  value: UseHoverCardReturn
}

export type HoverCardRootProviderProps = Assigns<
  RootProviderProps,
  UsePresenceProps,
  {
    children?: ReactNode | undefined
  }
>

export const HoverCardRootProvider = (props: HoverCardRootProviderProps) => {
  const [presenceProps, { value: hoverCard, children }] = splitPresenceProps(props)
  const presence = usePresence(mergeProps({ present: hoverCard.open }, presenceProps))

  return (
    <HoverCardProvider value={hoverCard}>
      <PresenceProvider value={presence}>{children}</PresenceProvider>
    </HoverCardProvider>
  )
}
