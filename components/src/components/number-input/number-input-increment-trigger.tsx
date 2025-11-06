import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useNumberInputContext } from './use-number-input-context'

export const NumberInputIncrementTriggerElement = 'button' as const
export interface NumberInputIncrementTriggerProps
  extends ComponentProps<typeof NumberInputIncrementTriggerElement>,
    PolymorphicProps {}

export const NumberInputIncrementTrigger = (props: NumberInputIncrementTriggerProps) => {
  const { ref, ...restProps } = props
  const numberInput = useNumberInputContext()
  const mergedProps = mergeProps(numberInput.getIncrementTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
