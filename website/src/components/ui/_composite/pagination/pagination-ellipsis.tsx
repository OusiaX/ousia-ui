import { ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { EllipsisProps } from '@zag-js/pagination'
import type { ComponentProps } from 'react'
import { usePaginationContext } from './use-pagination-context'

export const PaginationEllipsisElement = 'div' as const
export interface PaginationEllipsisProps
  extends ComponentProps<typeof PaginationEllipsisElement>,
    EllipsisProps {}

export const PaginationEllipsis = (props: PaginationEllipsisProps) => {
  const { ref, ...restProps } = props
  const [ellipsisProps, localProps] = createSplitProps<EllipsisProps>()(restProps, ['index'])
  const pagination = usePaginationContext()
  const mergedProps = mergeProps(pagination.getEllipsisProps(ellipsisProps), localProps)

  return <ark.div {...mergedProps} ref={ref} />
}
