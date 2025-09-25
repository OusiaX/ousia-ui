import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { useNumberInputContext } from './use-number-input-context'

export interface NumberInputValueTextBaseProps {}
export interface NumberInputValueTextProps extends HTMLProps<'span'>, NumberInputValueTextBaseProps {}

export const NumberInputValueText = forwardRef<HTMLSpanElement, NumberInputValueTextProps>((props, ref) => {
  const { children, ...localProps } = props
  const numberInput = useNumberInputContext()
  const mergedProps = mergeProps(numberInput.getValueTextProps(), localProps)

  return (
    <arkSimple.span {...mergedProps} ref={ref}>
      {children || numberInput.value}
    </arkSimple.span>
  )
})

NumberInputValueText.displayName = 'NumberInputValueText'
