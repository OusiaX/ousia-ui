import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { usePaginationContext } from './use-pagination-context'

export interface PaginationPrevTriggerBaseProps extends PolymorphicProps {}
export interface PaginationPrevTriggerProps
  extends ComponentProps<'button'>,
    PaginationPrevTriggerBaseProps {}

export const PaginationPrevTrigger = (props: PaginationPrevTriggerProps) => {
  const { ref, ...restProps } = props
  const pagination = usePaginationContext()
  const mergedProps = mergeProps(pagination.getPrevTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
