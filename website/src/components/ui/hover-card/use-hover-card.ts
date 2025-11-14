import type { Optional } from '@ousia-ui/ark'
import { useEnvironmentContext, useLocaleContext } from '@ousia-ui/ark/providers'
import * as hoverCard from '@zag-js/hover-card'
import { type PropTypes, normalizeProps, useMachine } from '@zag-js/react'
import { useId } from 'react'

export interface UseHoverCardProps
  extends Optional<Omit<hoverCard.Props, 'dir' | 'getRootNode'>, 'id'> {}

export interface UseHoverCardReturn extends hoverCard.Api<PropTypes> {}

export const useHoverCard = (props?: UseHoverCardProps): UseHoverCardReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const machineProps: hoverCard.Props = {
    id,
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(hoverCard.machine, machineProps)
  return hoverCard.connect(service, normalizeProps)
}
