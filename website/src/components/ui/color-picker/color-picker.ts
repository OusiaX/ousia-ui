'use client'
import type { Assign } from '@ousia-ui/ark'
import { type ColorPickerVariantProps, colorPicker } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  ColorPickerArea,
  type ColorPickerAreaElement,
  type ColorPickerAreaProps,
} from './color-picker-area'
import {
  ColorPickerAreaBackground,
  type ColorPickerAreaBackgroundElement,
  type ColorPickerAreaBackgroundProps,
} from './color-picker-area-background'
import {
  ColorPickerAreaThumb,
  type ColorPickerAreaThumbElement,
  type ColorPickerAreaThumbProps,
} from './color-picker-area-thumb'
import {
  ColorPickerChannelInput,
  type ColorPickerChannelInputElement,
  type ColorPickerChannelInputProps,
} from './color-picker-channel-input'
import {
  ColorPickerChannelSlider,
  type ColorPickerChannelSliderElement,
  type ColorPickerChannelSliderProps,
} from './color-picker-channel-slider'
import {
  ColorPickerChannelSliderLabel,
  type ColorPickerChannelSliderLabelElement,
  type ColorPickerChannelSliderLabelProps,
} from './color-picker-channel-slider-label'
import {
  ColorPickerChannelSliderThumb,
  type ColorPickerChannelSliderThumbElement,
  type ColorPickerChannelSliderThumbProps,
} from './color-picker-channel-slider-thumb'
import {
  ColorPickerChannelSliderTrack,
  type ColorPickerChannelSliderTrackElement,
  type ColorPickerChannelSliderTrackProps,
} from './color-picker-channel-slider-track'
import {
  ColorPickerChannelSliderValueText,
  type ColorPickerChannelSliderValueTextElement,
  type ColorPickerChannelSliderValueTextProps,
} from './color-picker-channel-slider-value-text'
import {
  ColorPickerContent,
  type ColorPickerContentElement,
  type ColorPickerContentProps,
} from './color-picker-content'
import {
  ColorPickerControl,
  type ColorPickerControlElement,
  type ColorPickerControlProps,
} from './color-picker-control'
import {
  ColorPickerEyeDropperTrigger,
  type ColorPickerEyeDropperTriggerElement,
  type ColorPickerEyeDropperTriggerProps,
} from './color-picker-eye-dropper-trigger'
import {
  ColorPickerFormatSelect,
  type ColorPickerFormatSelectElement,
  type ColorPickerFormatSelectProps,
} from './color-picker-format-select'
import {
  ColorPickerFormatTrigger,
  type ColorPickerFormatTriggerElement,
  type ColorPickerFormatTriggerProps,
} from './color-picker-format-trigger'
import {
  ColorPickerLabel,
  type ColorPickerLabelElement,
  type ColorPickerLabelProps,
} from './color-picker-label'
import {
  ColorPickerPositioner,
  type ColorPickerPositionerElement,
  type ColorPickerPositionerProps,
} from './color-picker-positioner'
import {
  ColorPickerRoot,
  type ColorPickerRootElement,
  type ColorPickerRootProps,
} from './color-picker-root'
import {
  ColorPickerRootProvider,
  type ColorPickerRootProviderElement,
  type ColorPickerRootProviderProps,
} from './color-picker-root-provider'
import {
  ColorPickerSwatch,
  type ColorPickerSwatchElement,
  type ColorPickerSwatchProps,
} from './color-picker-swatch'
import {
  ColorPickerSwatchGroup,
  type ColorPickerSwatchGroupElement,
  type ColorPickerSwatchGroupProps,
} from './color-picker-swatch-group'
import {
  ColorPickerSwatchIndicator,
  type ColorPickerSwatchIndicatorElement,
  type ColorPickerSwatchIndicatorProps,
} from './color-picker-swatch-indicator'
import {
  ColorPickerSwatchTrigger,
  type ColorPickerSwatchTriggerElement,
  type ColorPickerSwatchTriggerProps,
} from './color-picker-swatch-trigger'
import {
  ColorPickerTransparencyGrid,
  type ColorPickerTransparencyGridElement,
  type ColorPickerTransparencyGridProps,
} from './color-picker-transparency-grid'
import {
  ColorPickerTrigger,
  type ColorPickerTriggerElement,
  type ColorPickerTriggerProps,
} from './color-picker-trigger'
import {
  ColorPickerValueSwatch,
  type ColorPickerValueSwatchElement,
  type ColorPickerValueSwatchProps,
} from './color-picker-value-swatch'
import {
  ColorPickerValueText,
  type ColorPickerValueTextElement,
  type ColorPickerValueTextProps,
} from './color-picker-value-text'
import {
  ColorPickerView,
  type ColorPickerViewElement,
  type ColorPickerViewProps,
} from './color-picker-view'

const { withProvider, withContext } = createStyleContext(colorPicker)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof ColorPickerRootProviderElement,
  Assign<ColorPickerRootProviderProps, ColorPickerVariantProps>
>(ColorPickerRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof ColorPickerRootElement,
  Assign<ColorPickerRootProps, ColorPickerVariantProps>
>(ColorPickerRoot, 'root')

export const AreaBackground = withContext<
  typeof ColorPickerAreaBackgroundElement,
  ColorPickerAreaBackgroundProps
>(ColorPickerAreaBackground, 'areaBackground')

export const Area = withContext<typeof ColorPickerAreaElement, ColorPickerAreaProps>(
  ColorPickerArea,
  'area',
)

export const AreaThumb = withContext<typeof ColorPickerAreaThumbElement, ColorPickerAreaThumbProps>(
  ColorPickerAreaThumb,
  'areaThumb',
)

export const ChannelInput = withContext<
  typeof ColorPickerChannelInputElement,
  ColorPickerChannelInputProps
>(ColorPickerChannelInput, 'channelInput')

export const ChannelSliderLabel = withContext<
  typeof ColorPickerChannelSliderLabelElement,
  ColorPickerChannelSliderLabelProps
>(ColorPickerChannelSliderLabel, 'channelSliderLabel')

export const ChannelSlider = withContext<
  typeof ColorPickerChannelSliderElement,
  ColorPickerChannelSliderProps
>(ColorPickerChannelSlider, 'channelSlider')

export const ChannelSliderThumb = withContext<
  typeof ColorPickerChannelSliderThumbElement,
  ColorPickerChannelSliderThumbProps
>(ColorPickerChannelSliderThumb, 'channelSliderThumb')

export const ChannelSliderTrack = withContext<
  typeof ColorPickerChannelSliderTrackElement,
  ColorPickerChannelSliderTrackProps
>(ColorPickerChannelSliderTrack, 'channelSliderTrack')

export const ChannelSliderValueText = withContext<
  typeof ColorPickerChannelSliderValueTextElement,
  ColorPickerChannelSliderValueTextProps
>(ColorPickerChannelSliderValueText, 'channelSliderValueText')

export const Content = withContext<typeof ColorPickerContentElement, ColorPickerContentProps>(
  ColorPickerContent,
  'content',
)

export const Control = withContext<typeof ColorPickerControlElement, ColorPickerControlProps>(
  ColorPickerControl,
  'control',
)

export const EyeDropperTrigger = withContext<
  typeof ColorPickerEyeDropperTriggerElement,
  ColorPickerEyeDropperTriggerProps
>(ColorPickerEyeDropperTrigger, 'eyeDropperTrigger')

export const FormatSelect = withContext<
  typeof ColorPickerFormatSelectElement,
  ColorPickerFormatSelectProps
>(ColorPickerFormatSelect, 'formatSelect')

export const FormatTrigger = withContext<
  typeof ColorPickerFormatTriggerElement,
  ColorPickerFormatTriggerProps
>(ColorPickerFormatTrigger, 'formatTrigger')

export const Label = withContext<typeof ColorPickerLabelElement, ColorPickerLabelProps>(
  ColorPickerLabel,
  'label',
)

export const Positioner = withContext<
  typeof ColorPickerPositionerElement,
  ColorPickerPositionerProps
>(ColorPickerPositioner, 'positioner')

export const SwatchGroup = withContext<
  typeof ColorPickerSwatchGroupElement,
  ColorPickerSwatchGroupProps
>(ColorPickerSwatchGroup, 'swatchGroup')

export const SwatchIndicator = withContext<
  typeof ColorPickerSwatchIndicatorElement,
  ColorPickerSwatchIndicatorProps
>(ColorPickerSwatchIndicator, 'swatchIndicator')

export const Swatch = withContext<typeof ColorPickerSwatchElement, ColorPickerSwatchProps>(
  ColorPickerSwatch,
  'swatch',
)

export const SwatchTrigger = withContext<
  typeof ColorPickerSwatchTriggerElement,
  ColorPickerSwatchTriggerProps
>(ColorPickerSwatchTrigger, 'swatchTrigger')

export const TransparencyGrid = withContext<
  typeof ColorPickerTransparencyGridElement,
  ColorPickerTransparencyGridProps
>(ColorPickerTransparencyGrid, 'transparencyGrid')

export const Trigger = withContext<typeof ColorPickerTriggerElement, ColorPickerTriggerProps>(
  ColorPickerTrigger,
  'trigger',
)

export const ValueSwatch = withContext<
  typeof ColorPickerValueSwatchElement,
  ColorPickerValueSwatchProps
>(ColorPickerValueSwatch, 'swatch')

export const ValueText = withContext<typeof ColorPickerValueTextElement, ColorPickerValueTextProps>(
  ColorPickerValueText,
  'valueText',
)

export const View = withContext<typeof ColorPickerViewElement, ColorPickerViewProps>(
  ColorPickerView,
  'view',
)

export { ColorPickerContext as Context } from './color-picker-context'
export { ColorPickerHiddenInput as HiddenInput } from './color-picker-hidden-input'
