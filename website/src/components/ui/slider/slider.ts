'use client'
import type { Assign } from '@ousia-ui/ark'
import { type SliderVariantProps, slider } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { SliderControl, type SliderControlElement, type SliderControlProps } from './slider-control'
import { SliderLabel, type SliderLabelElement, type SliderLabelProps } from './slider-label'
import { SliderMarker, type SliderMarkerElement, type SliderMarkerProps } from './slider-marker'
import {
  SliderMarkerGroup,
  type SliderMarkerGroupElement,
  type SliderMarkerGroupProps,
} from './slider-marker-group'
import { SliderRange, type SliderRangeElement, type SliderRangeProps } from './slider-range'
import { SliderRoot, type SliderRootElement, type SliderRootProps } from './slider-root'
import {
  SliderRootProvider,
  type SliderRootProviderElement,
  type SliderRootProviderProps,
} from './slider-root-provider'
import { SliderThumb, type SliderThumbElement, type SliderThumbProps } from './slider-thumb'
import { SliderTrack, type SliderTrackElement, type SliderTrackProps } from './slider-track'
import {
  SliderValueText,
  type SliderValueTextElement,
  type SliderValueTextProps,
} from './slider-value-text'

const { withProvider, withContext } = createStyleContext(slider)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof SliderRootProviderElement,
  Assign<SliderRootProviderProps, SliderVariantProps>
>(SliderRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof SliderRootElement,
  Assign<SliderRootProps, SliderVariantProps>
>(SliderRoot, 'root')

export const Control = withContext<typeof SliderControlElement, SliderControlProps>(
  SliderControl,
  'control',
)

export const Label = withContext<typeof SliderLabelElement, SliderLabelProps>(SliderLabel, 'label')

export const MarkerGroup = withContext<typeof SliderMarkerGroupElement, SliderMarkerGroupProps>(
  SliderMarkerGroup,
  'markerGroup',
)

export const Marker = withContext<typeof SliderMarkerElement, SliderMarkerProps>(
  SliderMarker,
  'marker',
)

export const Range = withContext<typeof SliderRangeElement, SliderRangeProps>(SliderRange, 'range')

export const Thumb = withContext<typeof SliderThumbElement, SliderThumbProps>(SliderThumb, 'thumb')

export const Track = withContext<typeof SliderTrackElement, SliderTrackProps>(SliderTrack, 'track')

export const ValueText = withContext<typeof SliderValueTextElement, SliderValueTextProps>(
  SliderValueText,
  'valueText',
)

export { SliderContext as Context } from './slider-context'
export { SliderHiddenInput as HiddenInput } from './slider-hidden-input'
