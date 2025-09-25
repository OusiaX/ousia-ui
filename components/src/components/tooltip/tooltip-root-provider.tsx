import { mergeProps } from '@zag-js/react'
import type { ReactNode } from 'react'
import { type UsePresenceProps, PresenceProvider, usePresence, splitPresenceProps } from '@ousia-ui/ark/utils'
import type { UseTooltipReturn } from './use-tooltip'
import { TooltipProvider } from './use-tooltip-context'

interface RootProviderProps {
  value: UseTooltipReturn
}

export interface TooltipRootProviderBaseProps extends RootProviderProps, UsePresenceProps {}
export interface TooltipRootProviderProps extends TooltipRootProviderBaseProps {
  children?: ReactNode | undefined
}

export const TooltipRootProvider = (props: TooltipRootProviderProps) => {
  const [presenceProps, { value: tooltip, children }] = splitPresenceProps(props)
  const presence = usePresence(mergeProps({ present: tooltip.open }, presenceProps))

  return (
    <TooltipProvider value={tooltip}>
      <PresenceProvider value={presence}>{children}</PresenceProvider>
    </TooltipProvider>
  )
}
