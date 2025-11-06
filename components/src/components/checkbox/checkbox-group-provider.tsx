import { type PolymorphicProps, ark } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import {
  CheckboxGroupContextProvider,
  type UseCheckboxGroupContext,
} from './use-checkbox-group-context'

interface ProviderProps {
  value: UseCheckboxGroupContext
}

export const CheckboxGroupProviderElement = 'div' as const
export interface CheckboxGroupProviderProps
  extends ComponentProps<typeof CheckboxGroupProviderElement>,
    ProviderProps,
    PolymorphicProps {}

export const CheckboxGroupProvider = (props: CheckboxGroupProviderProps) => {
  const { ref, ...restProps } = props
  const [localProps, restLocalProps] = createSplitProps<ProviderProps>()(restProps, ['value'])

  return (
    <CheckboxGroupContextProvider value={localProps.value}>
      <ark.div ref={ref} role="group" data-scope="checkbox" data-part="group" {...restLocalProps} />
    </CheckboxGroupContextProvider>
  )
}
