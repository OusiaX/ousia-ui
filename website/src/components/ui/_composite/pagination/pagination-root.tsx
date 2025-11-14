import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UsePaginationProps, usePagination } from './use-pagination'
import { PaginationProvider } from './use-pagination-context'

export const PaginationRootElement = 'nav' as const
export type PaginationRootProps = Assigns<
  ComponentProps<typeof PaginationRootElement>,
  UsePaginationProps,
  PolymorphicProps
>

export const PaginationRoot = (props: PaginationRootProps) => {
  const { ref, ...restProps } = props
  const [paginationProps, localProps] = createSplitProps<UsePaginationProps>()(restProps, [
    'count',
    'defaultPage',
    'defaultPageSize',
    'id',
    'ids',
    'onPageChange',
    'onPageSizeChange',
    'page',
    'pageSize',
    'siblingCount',
    'translations',
    'type',
  ])

  const pagination = usePagination(paginationProps)
  const mergedProps = mergeProps(pagination.getRootProps(), localProps)

  return (
    <PaginationProvider value={pagination}>
      <ark.nav {...mergedProps} ref={ref} />
    </PaginationProvider>
  )
}
