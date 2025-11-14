import type { Assigns } from '@ousia-ui/ark'
import {
  PresenceProvider,
  type UsePresenceProps,
  splitPresenceProps,
  usePresence,
} from '@ousia-ui/ark/utils'
import { mergeProps } from '@zag-js/react'
import type { ReactNode } from 'react'
import { type UseTooltipProps, useTooltip } from './use-tooltip'
import { TooltipProvider } from './use-tooltip-context'

export type TooltipRootProps = Assigns<
  UseTooltipProps,
  UsePresenceProps,
  {
    children?: ReactNode | undefined
  }
>

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
