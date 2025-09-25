import * as colorPicker from '@zag-js/color-picker'
import { type PropTypes, normalizeProps, useMachine } from '@zag-js/react'
import { useId } from 'react'
import { useEnvironmentContext } from '@ousia-ui/ark/providers'
import { useLocaleContext } from '@ousia-ui/ark/providers'
import type { Optional } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'

export interface UseColorPickerProps extends Optional<Omit<colorPicker.Props, 'dir' | 'getRootNode'>, 'id'> {}

export interface UseColorPickerReturn extends colorPicker.Api<PropTypes> {}

export const useColorPicker = (props?: UseColorPickerProps): UseColorPickerReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()
  const field = useFieldContext()

  const machineProps: colorPicker.Props = {
    id,
    ids: {
      label: field?.ids.label,
      input: field?.ids.control,
    },
    dir,
    disabled: field?.disabled,
    invalid: field?.invalid,
    readOnly: field?.readOnly,
    required: field?.required,
    getRootNode,
    ...props,
  }

  const service = useMachine(colorPicker.machine, machineProps)
  return colorPicker.connect(service, normalizeProps)
}
