'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type SegmentGroupVariantProps, segmentGroup } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { SegmentGroupContext } from './segment-group-context'
import { SegmentGroupIndicator } from './segment-group-indicator'
import { SegmentGroupItem } from './segment-group-item'
import { SegmentGroupItemControl } from './segment-group-item-control'
import { SegmentGroupItemHiddenInput } from './segment-group-item-hidden-input'
import { SegmentGroupItemText } from './segment-group-item-text'
import { SegmentGroupLabel } from './segment-group-label'
import { SegmentGroupRoot } from './segment-group-root'
import { SegmentGroupRootProvider } from './segment-group-root-provider'

const { withProvider, withContext } = createStyleContext(segmentGroup)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, SegmentGroupVariantProps>
>(SegmentGroupRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, SegmentGroupVariantProps>
>(SegmentGroupRoot, 'root')

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(SegmentGroupIndicator, 'indicator')

export const ItemControl = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(SegmentGroupItemControl, 'itemControl')

export const Item = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(SegmentGroupItem, 'item')

export const ItemText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(SegmentGroupItemText, 'itemText')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(SegmentGroupLabel, 'label')

export { SegmentGroupContext as Context, SegmentGroupItemHiddenInput as ItemHiddenInput }
