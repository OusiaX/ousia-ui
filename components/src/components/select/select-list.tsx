import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'

export interface SelectListProps extends ComponentProps<'div'>, PolymorphicProps {}

export const SelectList = (props: SelectListProps) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getListProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
