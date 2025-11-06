import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UsePaginationReturn } from './use-pagination'
import { PaginationProvider } from './use-pagination-context'

interface RootProviderProps {
  value: UsePaginationReturn
}

export const PaginationRootProviderElement = 'nav' as const
export interface PaginationRootProviderProps
  extends ComponentProps<typeof PaginationRootProviderElement>,
    RootProviderProps,
    PolymorphicProps {}

export const PaginationRootProvider = (props: PaginationRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: pagination }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(pagination.getRootProps(), localProps)

  return (
    <PaginationProvider value={pagination}>
      <ark.nav {...mergedProps} ref={ref} />
    </PaginationProvider>
  )
}
