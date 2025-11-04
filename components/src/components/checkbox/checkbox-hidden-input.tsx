import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useCheckboxContext } from './use-checkbox-context'

export interface CheckboxHiddenInputProps extends ComponentProps<'input'>, PolymorphicProps {}

export const CheckboxHiddenInput = (props: CheckboxHiddenInputProps) => {
  const { ref, ...restProps } = props
  const checkbox = useCheckboxContext()
  const mergedProps = mergeProps(checkbox.getHiddenInputProps(), restProps)
  const field = useFieldContext()

  return <ark.input aria-describedby={field?.ariaDescribedby} {...mergedProps} ref={ref} />
}
