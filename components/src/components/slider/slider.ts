'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type SliderVariantProps, slider } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { SliderControl } from './slider-control'
import { SliderLabel } from './slider-label'
import { SliderMarker } from './slider-marker'
import { SliderMarkerGroup } from './slider-marker-group'
import { SliderRange } from './slider-range'
import { SliderRoot } from './slider-root'
import { SliderRootProvider } from './slider-root-provider'
import { SliderThumb } from './slider-thumb'
import { SliderTrack } from './slider-track'
import { SliderValueText } from './slider-value-text'

const { withProvider, withContext } = createStyleContext(slider)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, SliderVariantProps>
>(SliderRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, SliderVariantProps>
>(SliderRoot, 'root')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(SliderControl, 'control')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(SliderLabel, 'label')

export const MarkerGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(SliderMarkerGroup, 'markerGroup')

export const Marker = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(SliderMarker, 'marker')

export const Range = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  SliderRange,
  'range',
)

export const Thumb = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  SliderThumb,
  'thumb',
)

export const Track = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  SliderTrack,
  'track',
)

export const ValueText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(SliderValueText, 'valueText')

export { SliderContext as Context } from './slider-context'
export { SliderHiddenInput as HiddenInput } from './slider-hidden-input'
