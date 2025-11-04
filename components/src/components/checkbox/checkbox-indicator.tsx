import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useCheckboxContext } from './use-checkbox-context'

export interface CheckboxIndicatorBaseProps extends PolymorphicProps {
  indeterminate?: boolean | undefined
}
export interface CheckboxIndicatorProps extends ComponentProps<'div'>, CheckboxIndicatorBaseProps {}

export const CheckboxIndicator = (props: CheckboxIndicatorProps) => {
  const { ref, indeterminate, ...restProps } = props
  const checkbox = useCheckboxContext()
  const mergedProps = mergeProps(checkbox.getIndicatorProps(), restProps)
  const isVisible = indeterminate ? checkbox.indeterminate : checkbox.checked

  return <ark.div {...mergedProps} hidden={!isVisible} ref={ref} />
}
