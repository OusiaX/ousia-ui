import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { useNumberInputContext } from './use-number-input-context'

export interface NumberInputScrubberBaseProps {}
export interface NumberInputScrubberProps extends HTMLProps<'div'>, NumberInputScrubberBaseProps {}

export const NumberInputScrubber = forwardRef<HTMLDivElement, NumberInputScrubberProps>((props, ref) => {
  const numberInput = useNumberInputContext()
  const mergedProps = mergeProps(numberInput.getScrubberProps(), props)

  return <arkSimple.div {...mergedProps} ref={ref} />
})

NumberInputScrubber.displayName = 'NumberInputScrubber'
