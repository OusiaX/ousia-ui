import type { Optional } from '@ousia-ui/ark'
import { useEnvironmentContext, useLocaleContext } from '@ousia-ui/ark/providers'
import * as segmentGroup from '@zag-js/radio-group'
import { type PropTypes, normalizeProps, useMachine } from '@zag-js/react'
import { useId } from 'react'

export interface UseSegmentGroupProps
  extends Optional<Omit<segmentGroup.Props, 'dir' | 'getRootNode'>, 'id'> {}
export interface UseSegmentGroupReturn extends segmentGroup.Api<PropTypes> {}

export const useSegmentGroup = (props?: UseSegmentGroupProps): UseSegmentGroupReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const machineProps: segmentGroup.Props = {
    id,
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(segmentGroup.machine, machineProps)
  return segmentGroup.connect(service, normalizeProps)
}
