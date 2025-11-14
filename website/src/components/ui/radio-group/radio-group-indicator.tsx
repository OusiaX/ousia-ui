import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useRadioGroupContext } from './use-radio-group-context'

export const RadioGroupIndicatorElement = 'div' as const
export interface RadioGroupIndicatorProps
  extends ComponentProps<typeof RadioGroupIndicatorElement>,
    PolymorphicProps {}

export const RadioGroupIndicator = (props: RadioGroupIndicatorProps) => {
  const { ref, ...restProps } = props
  const radioGroup = useRadioGroupContext()
  const mergedProps = mergeProps(radioGroup.getIndicatorProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
