import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useNumberInputContext } from './use-number-input-context'

export const NumberInputControlElement = 'div' as const
export interface NumberInputControlProps
  extends ComponentProps<typeof NumberInputControlElement>,
    PolymorphicProps {}

export const NumberInputControl = (props: NumberInputControlProps) => {
  const { ref, ...restProps } = props
  const numberInput = useNumberInputContext()
  const mergedProps = mergeProps(numberInput.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
