import {
  PresenceProvider,
  type UsePresenceProps,
  splitPresenceProps,
  usePresence,
} from '@ousia-ui/ark/utils'
import { mergeProps } from '@zag-js/react'
import type { ReactNode } from 'react'
import type { UseTooltipReturn } from './use-tooltip'
import { TooltipProvider } from './use-tooltip-context'

interface RootProviderProps {
  value: UseTooltipReturn
}

export interface TooltipRootProviderProps extends RootProviderProps, UsePresenceProps {
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
