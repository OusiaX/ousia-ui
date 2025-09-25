import { mergeProps } from '@zag-js/react'
import type { ReactNode } from 'react'
import { type UsePresenceProps, PresenceProvider, usePresence, splitPresenceProps } from '@ousia-ui/ark/utils'
import { type UseTooltipProps, useTooltip } from './use-tooltip'
import { TooltipProvider } from './use-tooltip-context'

export interface TooltipRootBaseProps extends UseTooltipProps, UsePresenceProps {}
export interface TooltipRootProps extends TooltipRootBaseProps {
  children?: ReactNode | undefined
}

export const TooltipRoot = (props: TooltipRootProps) => {
  const [presenceProps, { children, ...localProps }] = splitPresenceProps(props)
  const tooltip = useTooltip(localProps)
  const presence = usePresence(mergeProps({ present: tooltip.open }, presenceProps))

  return (
    <TooltipProvider value={tooltip}>
      <PresenceProvider value={presence}>{children}</PresenceProvider>
    </TooltipProvider>
  )
}
