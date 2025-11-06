import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'

export const SelectControlElement = 'div' as const
export interface SelectControlProps
  extends ComponentProps<typeof SelectControlElement>,
    PolymorphicProps {}

export const SelectControl = (props: SelectControlProps) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
