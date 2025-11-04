import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useNumberInputContext } from './use-number-input-context'

export interface NumberInputScrubberBaseProps extends PolymorphicProps {}
export interface NumberInputScrubberProps
  extends ComponentProps<'div'>,
    NumberInputScrubberBaseProps {}

export const NumberInputScrubber = (props: NumberInputScrubberProps) => {
  const { ref, ...restProps } = props
  const numberInput = useNumberInputContext()
  const mergedProps = mergeProps(numberInput.getScrubberProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
