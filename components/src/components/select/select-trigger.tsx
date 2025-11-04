import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'

export interface SelectTriggerProps extends ComponentProps<'button'>, PolymorphicProps {}

export const SelectTrigger = (props: SelectTriggerProps) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
