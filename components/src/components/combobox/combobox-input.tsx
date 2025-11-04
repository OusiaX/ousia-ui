import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useComboboxContext } from './use-combobox-context'

export interface ComboboxInputProps extends ComponentProps<'input'>, PolymorphicProps {}

export const ComboboxInput = (props: ComboboxInputProps) => {
  const { ref, ...restProps } = props
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(combobox.getInputProps(), restProps)
  const field = useFieldContext()

  return <ark.input aria-describedby={field?.ariaDescribedby} {...mergedProps} ref={ref} />
}
