import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useRadioGroupContext } from './use-radio-group-context'
import { useRadioGroupItemPropsContext } from './use-radio-group-item-props-context'

export interface RadioGroupItemTextBaseProps extends PolymorphicProps {}
export interface RadioGroupItemTextProps
  extends ComponentProps<'span'>,
    RadioGroupItemTextBaseProps {}

export const RadioGroupItemText = (props: RadioGroupItemTextProps) => {
  const { ref, ...restProps } = props
  const radioGroup = useRadioGroupContext()
  const itemProps = useRadioGroupItemPropsContext()
  const mergedProps = mergeProps(radioGroup.getItemTextProps(itemProps), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
