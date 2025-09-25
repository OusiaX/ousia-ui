import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { UsePaginationReturn } from './use-pagination'
import { PaginationProvider } from './use-pagination-context'

interface RootProviderProps {
  value: UsePaginationReturn
}

export interface PaginationRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface PaginationRootProviderProps extends HTMLProps<'nav'>, PaginationRootProviderBaseProps {}

export const PaginationRootProvider = forwardRef<HTMLElement, PaginationRootProviderProps>((props, ref) => {
  const [{ value: pagination }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(pagination.getRootProps(), localProps)

  return (
    <PaginationProvider value={pagination}>
      <arkMemo.nav {...mergedProps} ref={ref} />
    </PaginationProvider>
  )
})

PaginationRootProvider.displayName = 'PaginationRootProvider'
