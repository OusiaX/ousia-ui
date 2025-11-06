import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { usePaginationContext } from './use-pagination-context'

export const PaginationPrevTriggerElement = 'button' as const
export interface PaginationPrevTriggerProps
  extends ComponentProps<typeof PaginationPrevTriggerElement>,
    PolymorphicProps {}

export const PaginationPrevTrigger = (props: PaginationPrevTriggerProps) => {
  const { ref, ...restProps } = props
  const pagination = usePaginationContext()
  const mergedProps = mergeProps(pagination.getPrevTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
