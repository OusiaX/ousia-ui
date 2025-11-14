import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'

export const SelectTriggerElement = 'button' as const
export interface SelectTriggerProps
  extends ComponentProps<typeof SelectTriggerElement>,
    PolymorphicProps {}

export const SelectTrigger = (props: SelectTriggerProps) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
