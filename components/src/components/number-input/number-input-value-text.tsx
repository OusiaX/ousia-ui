import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useNumberInputContext } from './use-number-input-context'

export interface NumberInputValueTextProps extends ComponentProps<'span'>, PolymorphicProps {}

export const NumberInputValueText = (props: NumberInputValueTextProps) => {
  const { ref, children, ...localProps } = props
  const numberInput = useNumberInputContext()
  const mergedProps = mergeProps(numberInput.getValueTextProps(), localProps)

  return (
    <ark.span {...mergedProps} ref={ref}>
      {children || numberInput.value}
    </ark.span>
  )
}
