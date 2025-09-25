import { type PropTypes, normalizeProps, useMachine } from '@zag-js/react'
import * as splitter from '@zag-js/splitter'
import { useId } from 'react'
import { useEnvironmentContext, useLocaleContext } from '@ousia-ui/ark/providers'
import type { Optional } from '@ousia-ui/ark'

export interface UseSplitterProps extends Optional<Omit<splitter.Props, 'dir' | 'getRootNode'>, 'id'> {}
export interface UseSplitterReturn extends splitter.Api<PropTypes> {}

export const useSplitter = (props: UseSplitterProps): UseSplitterReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const machineProps: splitter.Props = {
    id,
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(splitter.machine, machineProps)
  return splitter.connect(service, normalizeProps)
}
