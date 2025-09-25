import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkMemo, type Assign } from '@ousia-ui/ark'
import { CheckboxGroupContextProvider, type UseCheckboxGroupContext } from './use-checkbox-group-context'

interface ProviderProps {
  value: UseCheckboxGroupContext
}

export interface CheckboxGroupProviderBaseProps extends ProviderProps, PolymorphicProps {}
export interface CheckboxGroupProviderProps extends Assign<HTMLProps<'div'>, CheckboxGroupProviderBaseProps> {}

export const CheckboxGroupProvider = forwardRef<HTMLDivElement, CheckboxGroupProviderProps>((props, ref) => {
  const [localProps, restProps] = createSplitProps<ProviderProps>()(props, ['value'])

  return (
    <CheckboxGroupContextProvider value={localProps.value}>
      <arkMemo.div ref={ref} role="group" data-scope="checkbox" data-part="group" {...restProps} />
    </CheckboxGroupContextProvider>
  )
})

CheckboxGroupProvider.displayName = 'CheckboxGroupProvider'
