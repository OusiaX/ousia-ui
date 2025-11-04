import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useRadioGroupContext } from './use-radio-group-context'

export interface RadioGroupLabelBaseProps extends PolymorphicProps {}
export interface RadioGroupLabelProps extends ComponentProps<'label'>, RadioGroupLabelBaseProps {}

export const RadioGroupLabel = (props: RadioGroupLabelProps) => {
  const { ref, ...restProps } = props
  const radioGroup = useRadioGroupContext()
  const mergedProps = mergeProps(radioGroup.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
