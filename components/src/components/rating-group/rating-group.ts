'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type RatingGroupVariantProps, ratingGroup } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { RatingGroupContext } from './rating-group-context'
import { RatingGroupControl } from './rating-group-control'
import { RatingGroupHiddenInput } from './rating-group-hidden-input'
import { RatingGroupItem } from './rating-group-item'
import { RatingGroupItemContext } from './rating-group-item-context'
import { RatingGroupLabel } from './rating-group-label'
import { RatingGroupRoot } from './rating-group-root'
import { RatingGroupRootProvider } from './rating-group-root-provider'

const { withProvider, withContext } = createStyleContext(ratingGroup)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, RatingGroupVariantProps>
>(RatingGroupRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, RatingGroupVariantProps>
>(RatingGroupRoot, 'root')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(RatingGroupControl, 'control')

export const Item = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'span'>, PolymorphicProps>>(
  RatingGroupItem,
  'item',
)

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(RatingGroupLabel, 'label')

export {
  RatingGroupContext as Context,
  RatingGroupItemContext as ItemContext,
  RatingGroupHiddenInput as HiddenInput,
}
