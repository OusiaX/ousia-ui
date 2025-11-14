import type { Optional } from '@ousia-ui/ark'
import { useEnvironmentContext, useLocaleContext } from '@ousia-ui/ark/providers'
import { useFieldContext } from '@ousia-ui/ark/utils'
import * as rating from '@zag-js/rating-group'
import { type PropTypes, normalizeProps, useMachine } from '@zag-js/react'
import { useId } from 'react'

export interface UseRatingGroupProps
  extends Optional<Omit<rating.Props, 'dir' | 'getRootNode'>, 'id'> {}
export interface UseRatingGroupReturn extends rating.Api<PropTypes> {}

export const useRatingGroup = (props?: UseRatingGroupProps): UseRatingGroupReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()
  const field = useFieldContext()

  const machineProps: rating.Props = {
    id,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control,
    },
    dir,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    required: field?.required,
    getRootNode,
    ...props,
  }

  const service = useMachine(rating.machine, machineProps)
  return rating.connect(service, normalizeProps)
}
