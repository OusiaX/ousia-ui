import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useRadioGroupContext } from './use-radio-group-context'

export interface RadioGroupIndicatorBaseProps extends PolymorphicProps {}
export interface RadioGroupIndicatorProps
  extends ComponentProps<'div'>,
    RadioGroupIndicatorBaseProps {}

export const RadioGroupIndicator = (props: RadioGroupIndicatorProps) => {
  const { ref, ...restProps } = props
  const radioGroup = useRadioGroupContext()
  const mergedProps = mergeProps(radioGroup.getIndicatorProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
