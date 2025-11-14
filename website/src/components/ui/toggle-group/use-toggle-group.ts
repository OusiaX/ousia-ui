import type { Optional } from '@ousia-ui/ark'
import { useEnvironmentContext, useLocaleContext } from '@ousia-ui/ark/providers'
import { type PropTypes, normalizeProps, useMachine } from '@zag-js/react'
import * as toggleGroup from '@zag-js/toggle-group'
import { useId } from 'react'

export interface UseToggleGroupProps
  extends Optional<Omit<toggleGroup.Props, 'dir' | 'getRootNode'>, 'id'> {}
export interface UseToggleGroupReturn extends toggleGroup.Api<PropTypes> {}

export const useToggleGroup = (props?: UseToggleGroupProps): UseToggleGroupReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const machineProps: toggleGroup.Props = {
    id,
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(toggleGroup.machine, machineProps)
  return toggleGroup.connect(service, normalizeProps)
}
