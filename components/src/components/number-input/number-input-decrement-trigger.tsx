import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useNumberInputContext } from './use-number-input-context'

export interface NumberInputDecrementTriggerProps
  extends ComponentProps<'button'>,
    PolymorphicProps {}

export const NumberInputDecrementTrigger = (props: NumberInputDecrementTriggerProps) => {
  const { ref, ...restProps } = props
  const numberInput = useNumberInputContext()
  const mergedProps = mergeProps(numberInput.getDecrementTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
