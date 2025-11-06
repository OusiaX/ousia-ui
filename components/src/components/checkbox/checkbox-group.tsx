import { type Assigns, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseCheckboxGroupProps, useCheckboxGroup } from './use-checkbox-group'
import { CheckboxGroupContextProvider } from './use-checkbox-group-context'

export const CheckboxGroupElement = 'div' as const
export type CheckboxGroupProps = Assigns<
  ComponentProps<typeof CheckboxGroupElement>,
  UseCheckboxGroupProps,
  PolymorphicProps
>

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { ref, ...restProps } = props
  const [checkboxGroupProps, localProps] = createSplitProps<UseCheckboxGroupProps>()(restProps, [
    'defaultValue',
    'value',
    'onValueChange',
    'disabled',
    'invalid',
    'readOnly',
    'name',
  ])

  const checkboxGroup = useCheckboxGroup(checkboxGroupProps)

  return (
    <CheckboxGroupContextProvider value={checkboxGroup}>
      <ark.div ref={ref} role="group" data-scope="checkbox" data-part="group" {...localProps} />
    </CheckboxGroupContextProvider>
  )
}
