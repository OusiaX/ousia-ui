'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type ColorPickerVariantProps, colorPicker } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { ColorPickerArea } from './color-picker-area'
import { ColorPickerAreaBackground } from './color-picker-area-background'
import { ColorPickerAreaThumb } from './color-picker-area-thumb'
import { ColorPickerChannelInput } from './color-picker-channel-input'
import { ColorPickerChannelSlider } from './color-picker-channel-slider'
import { ColorPickerChannelSliderLabel } from './color-picker-channel-slider-label'
import { ColorPickerChannelSliderThumb } from './color-picker-channel-slider-thumb'
import { ColorPickerChannelSliderTrack } from './color-picker-channel-slider-track'
import { ColorPickerChannelSliderValueText } from './color-picker-channel-slider-value-text'
import { ColorPickerContent } from './color-picker-content'
import { ColorPickerControl } from './color-picker-control'
import { ColorPickerEyeDropperTrigger } from './color-picker-eye-dropper-trigger'
import { ColorPickerFormatSelect } from './color-picker-format-select'
import { ColorPickerFormatTrigger } from './color-picker-format-trigger'
import { ColorPickerLabel } from './color-picker-label'
import { ColorPickerPositioner } from './color-picker-positioner'
import { ColorPickerRoot } from './color-picker-root'
import { ColorPickerRootProvider } from './color-picker-root-provider'
import { ColorPickerSwatch } from './color-picker-swatch'
import { ColorPickerSwatchGroup } from './color-picker-swatch-group'
import { ColorPickerSwatchIndicator } from './color-picker-swatch-indicator'
import { ColorPickerSwatchTrigger } from './color-picker-swatch-trigger'
import { ColorPickerTransparencyGrid } from './color-picker-transparency-grid'
import { ColorPickerTrigger } from './color-picker-trigger'
import { ColorPickerValueSwatch } from './color-picker-value-swatch'
import { ColorPickerValueText } from './color-picker-value-text'
import { ColorPickerView } from './color-picker-view'

const { withProvider, withContext } = createStyleContext(colorPicker)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, ColorPickerVariantProps>
>(ColorPickerRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, ColorPickerVariantProps>
>(ColorPickerRoot, 'root')

export const AreaBackground = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ColorPickerAreaBackground, 'areaBackground')

export const Area = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ColorPickerArea,
  'area',
)

export const AreaThumb = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ColorPickerAreaThumb, 'areaThumb')

export const ChannelInput = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<'input'>, PolymorphicProps>
>(ColorPickerChannelInput, 'channelInput')

export const ChannelSliderLabel = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(ColorPickerChannelSliderLabel, 'channelSliderLabel')

export const ChannelSlider = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ColorPickerChannelSlider, 'channelSlider')

export const ChannelSliderThumb = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ColorPickerChannelSliderThumb, 'channelSliderThumb')

export const ChannelSliderTrack = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ColorPickerChannelSliderTrack, 'channelSliderTrack')

export const ChannelSliderValueText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(ColorPickerChannelSliderValueText, 'channelSliderValueText')

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ColorPickerContent, 'content')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ColorPickerControl, 'control')

export const EyeDropperTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(ColorPickerEyeDropperTrigger, 'eyeDropperTrigger')

export const FormatSelect = withContext<
  HTMLSelectElement,
  Assign<HTMLStyledProps<'select'>, PolymorphicProps>
>(ColorPickerFormatSelect, 'formatSelect')

export const FormatTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(ColorPickerFormatTrigger, 'formatTrigger')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(ColorPickerLabel, 'label')

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ColorPickerPositioner, 'positioner')

export const SwatchGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ColorPickerSwatchGroup, 'swatchGroup')

export const SwatchIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ColorPickerSwatchIndicator, 'swatchIndicator')

export const Swatch = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ColorPickerSwatch,
  'swatch',
)

export const SwatchTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(ColorPickerSwatchTrigger, 'swatchTrigger')

export const TransparencyGrid = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ColorPickerTransparencyGrid, 'transparencyGrid')

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(ColorPickerTrigger, 'trigger')

export const ValueSwatch = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ColorPickerValueSwatch, 'swatch')

export const ValueText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(ColorPickerValueText, 'valueText')

export const View = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ColorPickerView,
  'view',
)

export { ColorPickerContext as Context } from './color-picker-context'
export { ColorPickerHiddenInput as HiddenInput } from './color-picker-hidden-input'
