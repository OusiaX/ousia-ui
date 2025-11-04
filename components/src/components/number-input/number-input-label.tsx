import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useNumberInputContext } from './use-number-input-context'

export interface NumberInputLabelProps extends ComponentProps<'label'>, PolymorphicProps {}

export const NumberInputLabel = (props: NumberInputLabelProps) => {
  const { ref, ...restProps } = props
  const numberInput = useNumberInputContext()
  const mergedProps = mergeProps(numberInput.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
