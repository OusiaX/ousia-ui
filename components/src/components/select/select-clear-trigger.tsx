import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'

export const SelectClearTriggerElement = 'button' as const
export interface SelectClearTriggerProps
  extends ComponentProps<typeof SelectClearTriggerElement>,
    PolymorphicProps {}

export const SelectClearTrigger = (props: SelectClearTriggerProps) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getClearTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
