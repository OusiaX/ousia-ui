import type { Optional } from '@ousia-ui/ark'
import { useEnvironmentContext, useLocaleContext } from '@ousia-ui/ark/providers'
import { useFieldContext } from '@ousia-ui/ark/utils'
import * as pinInput from '@zag-js/pin-input'
import { type PropTypes, normalizeProps, useMachine } from '@zag-js/react'
import { useId } from 'react'

export interface UsePinInputProps
  extends Optional<Omit<pinInput.Props, 'dir' | 'getRootNode'>, 'id'> {}
export interface UsePinInputReturn extends pinInput.Api<PropTypes> {}

export const usePinInput = (props?: UsePinInputProps): UsePinInputReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()
  const field = useFieldContext()

  const machineProps: pinInput.Props = {
    id,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control,
    },
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    required: field?.required,
    invalid: field?.invalid,
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(pinInput.machine, machineProps)
  return pinInput.connect(service, normalizeProps)
}
