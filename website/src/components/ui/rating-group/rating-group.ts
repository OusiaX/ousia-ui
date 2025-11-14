'use client'
import type { Assign } from '@ousia-ui/ark'
import type { ItemProps } from '@zag-js/rating-group'
import { type RatingGroupVariantProps, ratingGroup } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { RatingGroupContext } from './rating-group-context'
import {
  RatingGroupControl,
  type RatingGroupControlElement,
  type RatingGroupControlProps,
} from './rating-group-control'
import { RatingGroupHiddenInput } from './rating-group-hidden-input'
import { RatingGroupItem, type RatingGroupItemElement } from './rating-group-item'
import { RatingGroupItemContext } from './rating-group-item-context'
import {
  RatingGroupLabel,
  type RatingGroupLabelElement,
  type RatingGroupLabelProps,
} from './rating-group-label'
import {
  RatingGroupRoot,
  type RatingGroupRootElement,
  type RatingGroupRootProps,
} from './rating-group-root'
import {
  RatingGroupRootProvider,
  type RatingGroupRootProviderElement,
  type RatingGroupRootProviderProps,
} from './rating-group-root-provider'

const { withProvider, withContext } = createStyleContext(ratingGroup)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof RatingGroupRootProviderElement,
  Assign<RatingGroupRootProviderProps, RatingGroupVariantProps>
>(RatingGroupRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof RatingGroupRootElement,
  Assign<RatingGroupRootProps, RatingGroupVariantProps>
>(RatingGroupRoot, 'root')

export const Control = withContext<typeof RatingGroupControlElement, RatingGroupControlProps>(
  RatingGroupControl,
  'control',
)

export const Item = withContext<typeof RatingGroupItemElement, ItemProps>(RatingGroupItem, 'item')

export const Label = withContext<typeof RatingGroupLabelElement, RatingGroupLabelProps>(
  RatingGroupLabel,
  'label',
)

export {
  RatingGroupContext as Context,
  RatingGroupItemContext as ItemContext,
  RatingGroupHiddenInput as HiddenInput,
}
