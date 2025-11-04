'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type PaginationVariantProps, pagination } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { PaginationEllipsis, type PaginationEllipsisBaseProps } from './pagination-ellipsis'
import { PaginationItem, type PaginationItemBaseProps } from './pagination-item'
import { PaginationNextTrigger } from './pagination-next-trigger'
import { PaginationPrevTrigger } from './pagination-prev-trigger'
import { PaginationRoot, type PaginationRootBaseProps } from './pagination-root'
import {
  PaginationRootProvider,
  type PaginationRootProviderBaseProps,
} from './pagination-root-provider'

const { withProvider, withContext } = createStyleContext(pagination)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLElement,
  Assign<Assign<HTMLStyledProps<'nav'>, PaginationRootProviderBaseProps>, PaginationVariantProps>
>(PaginationRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLElement,
  Assign<Assign<HTMLStyledProps<'nav'>, PaginationRootBaseProps>, PaginationVariantProps>
>(PaginationRoot, 'root', { forwardProps: ['page'] })

export const Ellipsis = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PaginationEllipsisBaseProps>
>(PaginationEllipsis, 'ellipsis')

export const Item = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PaginationItemBaseProps>
>(PaginationItem, 'item')

export const NextTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(PaginationNextTrigger, 'nextTrigger')

export const PrevTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(PaginationPrevTrigger, 'prevTrigger')

export { PaginationContext as Context } from './pagination-context'
