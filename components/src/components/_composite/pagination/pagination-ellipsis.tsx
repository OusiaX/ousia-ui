import type { EllipsisProps } from '@zag-js/pagination'
import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { usePaginationContext } from './use-pagination-context'

export interface PaginationEllipsisBaseProps extends EllipsisProps {}
export interface PaginationEllipsisProps extends HTMLProps<'div'>, PaginationEllipsisBaseProps {}

export const PaginationEllipsis = forwardRef<HTMLDivElement, PaginationEllipsisProps>((props, ref) => {
  const [ellipsisProps, localProps] = createSplitProps<EllipsisProps>()(props, ['index'])
  const pagination = usePaginationContext()
  const mergedProps = mergeProps(pagination.getEllipsisProps(ellipsisProps), localProps)

  return <arkSimple.div {...mergedProps} ref={ref} />
})

PaginationEllipsis.displayName = 'PaginationEllipsis'
