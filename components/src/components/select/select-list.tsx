import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'

export const SelectListElement = 'div' as const
export interface SelectListProps
  extends ComponentProps<typeof SelectListElement>,
    PolymorphicProps {}

export const SelectList = (props: SelectListProps) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getListProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
