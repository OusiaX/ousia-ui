import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useRadioGroupContext } from './use-radio-group-context'

export const RadioGroupLabelElement = 'label' as const
export interface RadioGroupLabelProps
  extends ComponentProps<typeof RadioGroupLabelElement>,
    PolymorphicProps {}

export const RadioGroupLabel = (props: RadioGroupLabelProps) => {
  const { ref, ...restProps } = props
  const radioGroup = useRadioGroupContext()
  const mergedProps = mergeProps(radioGroup.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
