import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useNumberInputContext } from './use-number-input-context'

export interface NumberInputControlProps extends ComponentProps<'div'>, PolymorphicProps {}

export const NumberInputControl = (props: NumberInputControlProps) => {
  const { ref, ...restProps } = props
  const numberInput = useNumberInputContext()
  const mergedProps = mergeProps(numberInput.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
