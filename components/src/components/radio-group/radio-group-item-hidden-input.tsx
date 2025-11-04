import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useRadioGroupContext } from './use-radio-group-context'
import { useRadioGroupItemPropsContext } from './use-radio-group-item-props-context'

export interface RadioGroupItemHiddenInputProps extends ComponentProps<'input'>, PolymorphicProps {}

export const RadioGroupItemHiddenInput = (props: RadioGroupItemHiddenInputProps) => {
  const { ref, ...restProps } = props
  const radioGroup = useRadioGroupContext()
  const itemProps = useRadioGroupItemPropsContext()
  const mergedProps = mergeProps(radioGroup.getItemHiddenInputProps(itemProps), restProps)

  return <ark.input {...mergedProps} ref={ref} />
}
