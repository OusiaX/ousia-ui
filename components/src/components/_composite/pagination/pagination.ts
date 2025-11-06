'use client'
import type { Assign } from '@ousia-ui/ark'
import type { EllipsisProps } from '@zag-js/pagination'
import { type PaginationVariantProps, pagination } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { PaginationEllipsis, type PaginationEllipsisElement } from './pagination-ellipsis'
import {
  PaginationItem,
  type PaginationItemElement,
  type PaginationItemProps,
} from './pagination-item'
import {
  PaginationNextTrigger,
  type PaginationNextTriggerElement,
  type PaginationNextTriggerProps,
} from './pagination-next-trigger'
import {
  PaginationPrevTrigger,
  type PaginationPrevTriggerElement,
  type PaginationPrevTriggerProps,
} from './pagination-prev-trigger'
import {
  PaginationRoot,
  type PaginationRootElement,
  type PaginationRootProps,
} from './pagination-root'
import {
  PaginationRootProvider,
  type PaginationRootProviderElement,
  type PaginationRootProviderProps,
} from './pagination-root-provider'

const { withProvider, withContext } = createStyleContext(pagination)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof PaginationRootProviderElement,
  Assign<PaginationRootProviderProps, PaginationVariantProps>
>(PaginationRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof PaginationRootElement,
  Assign<PaginationRootProps, PaginationVariantProps>
>(PaginationRoot, 'root', { forwardProps: ['page'] })

export const Ellipsis = withContext<typeof PaginationEllipsisElement, EllipsisProps>(
  PaginationEllipsis,
  'ellipsis',
)

export const Item = withContext<typeof PaginationItemElement, PaginationItemProps>(
  PaginationItem,
  'item',
)

export const NextTrigger = withContext<
  typeof PaginationNextTriggerElement,
  PaginationNextTriggerProps
>(PaginationNextTrigger, 'nextTrigger')

export const PrevTrigger = withContext<
  typeof PaginationPrevTriggerElement,
  PaginationPrevTriggerProps
>(PaginationPrevTrigger, 'prevTrigger')

export { PaginationContext as Context } from './pagination-context'
