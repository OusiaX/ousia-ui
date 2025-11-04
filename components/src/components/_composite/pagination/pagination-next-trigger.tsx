import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { usePaginationContext } from './use-pagination-context'

export interface PaginationNextTriggerProps extends ComponentProps<'button'>, PolymorphicProps {}

export const PaginationNextTrigger = (props: PaginationNextTriggerProps) => {
  const { ref, ...restProps } = props
  const pagination = usePaginationContext()
  const mergedProps = mergeProps(pagination.getNextTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
