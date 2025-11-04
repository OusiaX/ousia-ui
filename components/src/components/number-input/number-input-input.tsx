import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useNumberInputContext } from './use-number-input-context'

export interface NumberInputInputProps extends ComponentProps<'input'>, PolymorphicProps {}

export const NumberInputInput = (props: NumberInputInputProps) => {
  const { ref, ...restProps } = props
  const numberInput = useNumberInputContext()
  const mergedProps = mergeProps(numberInput.getInputProps(), restProps)
  const field = useFieldContext()

  return <ark.input aria-describedby={field?.ariaDescribedby} {...mergedProps} ref={ref} />
}
