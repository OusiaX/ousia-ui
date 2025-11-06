import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'

export const SelectIndicatorElement = 'div' as const
export interface SelectIndicatorProps
  extends ComponentProps<typeof SelectIndicatorElement>,
    PolymorphicProps {}

export const SelectIndicator = (props: SelectIndicatorProps) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getIndicatorProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
