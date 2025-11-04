import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useRadioGroupContext } from './use-radio-group-context'
import { useRadioGroupItemPropsContext } from './use-radio-group-item-props-context'

export interface RadioGroupItemControlProps extends ComponentProps<'div'>, PolymorphicProps {}

export const RadioGroupItemControl = (props: RadioGroupItemControlProps) => {
  const { ref, ...restProps } = props
  const radioGroup = useRadioGroupContext()
  const itemProps = useRadioGroupItemPropsContext()
  const mergedProps = mergeProps(radioGroup.getItemControlProps(itemProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
