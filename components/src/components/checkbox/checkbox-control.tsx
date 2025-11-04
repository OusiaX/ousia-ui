import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useCheckboxContext } from './use-checkbox-context'

export interface CheckboxControlBaseProps extends PolymorphicProps {}
export interface CheckboxControlProps extends ComponentProps<'div'>, CheckboxControlBaseProps {}

export const CheckboxControl = (props: CheckboxControlProps) => {
  const { ref, ...restProps } = props
  const checkbox = useCheckboxContext()
  const mergedProps = mergeProps(checkbox.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
