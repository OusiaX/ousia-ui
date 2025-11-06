import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useNumberInputContext } from './use-number-input-context'

export const NumberInputDecrementTriggerElement = 'button' as const
export interface NumberInputDecrementTriggerProps
  extends ComponentProps<typeof NumberInputDecrementTriggerElement>,
    PolymorphicProps {}

export const NumberInputDecrementTrigger = (props: NumberInputDecrementTriggerProps) => {
  const { ref, ...restProps } = props
  const numberInput = useNumberInputContext()
  const mergedProps = mergeProps(numberInput.getDecrementTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
