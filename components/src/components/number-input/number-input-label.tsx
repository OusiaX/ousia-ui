import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useNumberInputContext } from './use-number-input-context'

export const NumberInputLabelElement = 'label' as const
export interface NumberInputLabelProps
  extends ComponentProps<typeof NumberInputLabelElement>,
    PolymorphicProps {}

export const NumberInputLabel = (props: NumberInputLabelProps) => {
  const { ref, ...restProps } = props
  const numberInput = useNumberInputContext()
  const mergedProps = mergeProps(numberInput.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
