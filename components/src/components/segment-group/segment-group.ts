'use client'
import type { Assign } from '@ousia-ui/ark'
import { type SegmentGroupVariantProps, segmentGroup } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { SegmentGroupContext } from './segment-group-context'
import {
  SegmentGroupIndicator,
  type SegmentGroupIndicatorElement,
  type SegmentGroupIndicatorProps,
} from './segment-group-indicator'
import {
  SegmentGroupItem,
  type SegmentGroupItemElement,
  type SegmentGroupItemProps,
} from './segment-group-item'
import {
  SegmentGroupItemControl,
  type SegmentGroupItemControlElement,
  type SegmentGroupItemControlProps,
} from './segment-group-item-control'
import { SegmentGroupItemHiddenInput } from './segment-group-item-hidden-input'
import {
  SegmentGroupItemText,
  type SegmentGroupItemTextElement,
  type SegmentGroupItemTextProps,
} from './segment-group-item-text'
import {
  SegmentGroupLabel,
  type SegmentGroupLabelElement,
  type SegmentGroupLabelProps,
} from './segment-group-label'
import {
  SegmentGroupRoot,
  type SegmentGroupRootElement,
  type SegmentGroupRootProps,
} from './segment-group-root'
import {
  SegmentGroupRootProvider,
  type SegmentGroupRootProviderElement,
  type SegmentGroupRootProviderProps,
} from './segment-group-root-provider'

const { withProvider, withContext } = createStyleContext(segmentGroup)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof SegmentGroupRootProviderElement,
  Assign<SegmentGroupRootProviderProps, SegmentGroupVariantProps>
>(SegmentGroupRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof SegmentGroupRootElement,
  Assign<SegmentGroupRootProps, SegmentGroupVariantProps>
>(SegmentGroupRoot, 'root')

export const Indicator = withContext<
  typeof SegmentGroupIndicatorElement,
  SegmentGroupIndicatorProps
>(SegmentGroupIndicator, 'indicator')

export const ItemControl = withContext<
  typeof SegmentGroupItemControlElement,
  SegmentGroupItemControlProps
>(SegmentGroupItemControl, 'itemControl')

export const Item = withContext<typeof SegmentGroupItemElement, SegmentGroupItemProps>(
  SegmentGroupItem,
  'item',
)

export const ItemText = withContext<typeof SegmentGroupItemTextElement, SegmentGroupItemTextProps>(
  SegmentGroupItemText,
  'itemText',
)

export const Label = withContext<typeof SegmentGroupLabelElement, SegmentGroupLabelProps>(
  SegmentGroupLabel,
  'label',
)

export { SegmentGroupContext as Context, SegmentGroupItemHiddenInput as ItemHiddenInput }
