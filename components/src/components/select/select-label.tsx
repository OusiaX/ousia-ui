import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'

export interface SelectLabelProps extends ComponentProps<'label'>, PolymorphicProps {}

export const SelectLabel = (props: SelectLabelProps) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
