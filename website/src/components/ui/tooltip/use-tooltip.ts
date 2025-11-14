import type { Optional } from '@ousia-ui/ark'
import { useEnvironmentContext, useLocaleContext } from '@ousia-ui/ark/providers'
import { type PropTypes, normalizeProps, useMachine } from '@zag-js/react'
import * as tooltip from '@zag-js/tooltip'
import { useId } from 'react'

export interface UseTooltipProps
  extends Optional<Omit<tooltip.Props, 'dir' | 'getRootNode'>, 'id'> {}

export interface UseTooltipReturn extends tooltip.Api<PropTypes> {}

export const useTooltip = (props?: UseTooltipProps): UseTooltipReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const machineProps: tooltip.Props = {
    id,
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(tooltip.machine, machineProps)
  return tooltip.connect(service, normalizeProps)
}
