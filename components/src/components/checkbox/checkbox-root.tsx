import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseCheckboxProps, useCheckbox } from './use-checkbox'
import { CheckboxProvider } from './use-checkbox-context'

export const CheckboxRootElement = 'label' as const
export type CheckboxRootProps = Assigns<
  ComponentProps<typeof CheckboxRootElement>,
  UseCheckboxProps,
  PolymorphicProps
>

export const CheckboxRoot = (props: CheckboxRootProps) => {
  const { ref, ...restProps } = props
  const [useCheckboxProps, localProps] = createSplitProps<UseCheckboxProps>()(restProps, [
    'checked',
    'defaultChecked',
    'disabled',
    'form',
    'id',
    'ids',
    'invalid',
    'name',
    'onCheckedChange',
    'readOnly',
    'required',
    'value',
  ])
  const checkbox = useCheckbox(useCheckboxProps)
  const mergedProps = mergeProps(checkbox.getRootProps(), localProps)

  return (
    <CheckboxProvider value={checkbox}>
      <ark.label {...mergedProps} ref={ref} />
    </CheckboxProvider>
  )
}
