import { createContext } from '@ousia-ui/ark/utils'
import type { UsePaginationReturn } from './use-pagination'

export interface UsePaginationContext extends UsePaginationReturn {}

export const [PaginationProvider, usePaginationContext] = createContext<UsePaginationContext>({
  name: 'PaginationContext',
  hookName: 'usePaginationContext',
  providerName: '<PaginationProvider />',
})
