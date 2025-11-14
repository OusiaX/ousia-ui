import type { Optional } from '@ousia-ui/ark'
import { useEnvironmentContext } from '@ousia-ui/ark/providers'
import { useLocaleContext } from '@ousia-ui/ark/providers'
import * as dialog from '@zag-js/dialog'
import type { PropTypes } from '@zag-js/react'
import { normalizeProps } from '@zag-js/react'
import { useMachine } from '@zag-js/react'
import { useId } from 'react'

export interface UseDialogProps extends Optional<Omit<dialog.Props, 'getRootNode' | 'dir'>, 'id'> {}

export interface UseDialogReturn extends dialog.Api<PropTypes> {}

export const useDialog = (props?: UseDialogProps): UseDialogReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const machineProps: dialog.Props = {
    id,
    getRootNode,
    dir,
    ...props,
  }

  const service = useMachine(dialog.machine, machineProps)
  return dialog.connect(service, normalizeProps)
}
