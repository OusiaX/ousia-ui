import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useCheckboxContext } from './use-checkbox-context'

export interface CheckboxLabelBaseProps extends PolymorphicProps {}
export interface CheckboxLabelProps extends ComponentProps<'span'>, CheckboxLabelBaseProps {}

export const CheckboxLabel = (props: CheckboxLabelProps) => {
  const { ref, ...restProps } = props
  const checkbox = useCheckboxContext()
  const mergedProps = mergeProps(checkbox.getLabelProps(), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
