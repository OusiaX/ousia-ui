import type { Assigns } from '@ousia-ui/ark'
import {
  PresenceProvider,
  type UsePresenceProps,
  splitPresenceProps,
  usePresence,
} from '@ousia-ui/ark/utils'
import { mergeProps } from '@zag-js/react'
import type { ReactNode } from 'react'
import { type UseHoverCardProps, useHoverCard } from './use-hover-card'
import { HoverCardProvider } from './use-hover-card-context'

export type HoverCardRootProps = Assigns<
  UseHoverCardProps,
  UsePresenceProps,
  {
    children?: ReactNode | undefined
  }
>

export const HoverCardRoot = (props: HoverCardRootProps) => {
  const [presenceProps, { children, ...localProps }] = splitPresenceProps(props)
  const hoverCard = useHoverCard(localProps)
  const presence = usePresence(mergeProps({ present: hoverCard.open }, presenceProps))

  return (
    <HoverCardProvider value={hoverCard}>
      <PresenceProvider value={presence}>{children}</PresenceProvider>
    </HoverCardProvider>
  )
}
