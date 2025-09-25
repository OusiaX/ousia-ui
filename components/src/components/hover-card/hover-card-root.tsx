import { mergeProps } from '@zag-js/react'
import type { ReactNode } from 'react'
import { usePresence, type UsePresenceProps, PresenceProvider, splitPresenceProps } from '@ousia-ui/ark/utils'
import { type UseHoverCardProps, useHoverCard } from './use-hover-card'
import { HoverCardProvider } from './use-hover-card-context'

export interface HoverCardRootBaseProps extends UseHoverCardProps, UsePresenceProps {}
export interface HoverCardRootProps extends HoverCardRootBaseProps {
  children?: ReactNode | undefined
}

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
