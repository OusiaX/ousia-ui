import { type HTMLProps, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { Ref } from 'react'
import { type UsePaginationProps, usePagination } from './use-pagination'
import { PaginationProvider } from './use-pagination-context'

export interface PaginationRootBaseProps extends UsePaginationProps, PolymorphicProps {}
export interface PaginationRootProps extends HTMLProps<'nav'>, PaginationRootBaseProps {}

export const PaginationRoot = (props: PaginationRootProps & { ref?: Ref<HTMLElement> }) => {
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
