import type { Optional } from '@ousia-ui/ark'
import { useEnvironmentContext, useLocaleContext } from '@ousia-ui/ark/providers'
import { useFieldContext } from '@ousia-ui/ark/utils'
import { type PropTypes, normalizeProps, useMachine } from '@zag-js/react'
import * as tagsInput from '@zag-js/tags-input'
import { useId } from 'react'

export interface UseTagsInputProps
  extends Optional<Omit<tagsInput.Props, 'dir' | 'getRootNode'>, 'id'> {}
export interface UseTagsInputReturn extends tagsInput.Api<PropTypes> {}

export const useTagsInput = (props?: UseTagsInputProps): UseTagsInputReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()
  const field = useFieldContext()

  const machineProps: tagsInput.Props = {
    id,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control,
    },
    dir,
    disabled: field?.disabled,
    invalid: field?.invalid,
    readOnly: field?.readOnly,
    required: field?.required,
    getRootNode,
    ...props,
  }

  const service = useMachine(tagsInput.machine, machineProps)
  return tagsInput.connect(service, normalizeProps)
}
