"use client";
import type { Assign } from "@ousia-ui/ark";
import {
  type ColorPickerVariantProps,
  colorPicker,
} from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { ColorPickerRootProvider, type ColorPickerRootProviderBaseProps } from './color-picker-root-provider';
import { ColorPickerRoot, type ColorPickerRootBaseProps } from './color-picker-root';
import { ColorPickerAreaBackground, type ColorPickerAreaBackgroundBaseProps } from './color-picker-area-background';
import { ColorPickerArea, type ColorPickerAreaBaseProps } from './color-picker-area';
import { ColorPickerAreaThumb, type ColorPickerAreaThumbBaseProps } from './color-picker-area-thumb';
import { ColorPickerChannelInput, type ColorPickerChannelInputBaseProps } from './color-picker-channel-input';
import { ColorPickerChannelSliderLabel, type ColorPickerChannelSliderLabelBaseProps } from './color-picker-channel-slider-label';
import { ColorPickerChannelSlider, type ColorPickerChannelSliderBaseProps } from './color-picker-channel-slider';
import { ColorPickerChannelSliderThumb, type ColorPickerChannelSliderThumbBaseProps } from './color-picker-channel-slider-thumb';
import { ColorPickerChannelSliderTrack, type ColorPickerChannelSliderTrackBaseProps } from './color-picker-channel-slider-track';
import { ColorPickerChannelSliderValueText, type ColorPickerChannelSliderValueTextBaseProps } from './color-picker-channel-slider-value-text';
import { ColorPickerContent, type ColorPickerContentBaseProps } from './color-picker-content';
import { ColorPickerControl, type ColorPickerControlBaseProps } from './color-picker-control';
import { ColorPickerEyeDropperTrigger, type ColorPickerEyeDropperTriggerBaseProps } from './color-picker-eye-dropper-trigger';
import { ColorPickerFormatSelect, type ColorPickerFormatSelectBaseProps } from './color-picker-format-select';
import { ColorPickerFormatTrigger, type ColorPickerFormatTriggerBaseProps } from './color-picker-format-trigger';
import { ColorPickerLabel, type ColorPickerLabelBaseProps } from './color-picker-label';
import { ColorPickerPositioner, type ColorPickerPositionerBaseProps } from './color-picker-positioner';
import { ColorPickerSwatchGroup, type ColorPickerSwatchGroupBaseProps } from './color-picker-swatch-group';
import { ColorPickerSwatchIndicator, type ColorPickerSwatchIndicatorBaseProps } from './color-picker-swatch-indicator';
import { ColorPickerSwatch, type ColorPickerSwatchBaseProps } from './color-picker-swatch';
import { ColorPickerSwatchTrigger, type ColorPickerSwatchTriggerBaseProps } from './color-picker-swatch-trigger';
import { ColorPickerTransparencyGrid, type ColorPickerTransparencyGridBaseProps } from './color-picker-transparency-grid';
import { ColorPickerTrigger, type ColorPickerTriggerBaseProps } from './color-picker-trigger';
import { ColorPickerValueSwatch, type ColorPickerValueSwatchBaseProps } from './color-picker-value-swatch';
import { ColorPickerValueText, type ColorPickerValueTextBaseProps } from './color-picker-value-text';
import { ColorPickerView, type ColorPickerViewBaseProps } from './color-picker-view';

const { withProvider, withContext } = createStyleContext(colorPicker);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, ColorPickerRootProviderBaseProps>,
    ColorPickerVariantProps
  >
>(ColorPickerRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, ColorPickerRootBaseProps>,
    ColorPickerVariantProps
  >
>(ColorPickerRoot, "root");

export const AreaBackground = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerAreaBackgroundBaseProps>
>(ColorPickerAreaBackground, "areaBackground");

export const Area = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerAreaBaseProps>
>(ColorPickerArea, "area");

export const AreaThumb = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerAreaThumbBaseProps>
>(ColorPickerAreaThumb, "areaThumb");

export const ChannelInput = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<"input">, ColorPickerChannelInputBaseProps>
>(ColorPickerChannelInput, "channelInput");

export const ChannelSliderLabel = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, ColorPickerChannelSliderLabelBaseProps>
>(ColorPickerChannelSliderLabel, "channelSliderLabel");

export const ChannelSlider = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerChannelSliderBaseProps>
>(ColorPickerChannelSlider, "channelSlider");

export const ChannelSliderThumb = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerChannelSliderThumbBaseProps>
>(ColorPickerChannelSliderThumb, "channelSliderThumb");

export const ChannelSliderTrack = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerChannelSliderTrackBaseProps>
>(ColorPickerChannelSliderTrack, "channelSliderTrack");

export const ChannelSliderValueText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, ColorPickerChannelSliderValueTextBaseProps>
>(ColorPickerChannelSliderValueText, "channelSliderValueText");

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerContentBaseProps>
>(ColorPickerContent, "content");

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerControlBaseProps>
>(ColorPickerControl, "control");

export const EyeDropperTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, ColorPickerEyeDropperTriggerBaseProps>
>(ColorPickerEyeDropperTrigger, "eyeDropperTrigger");

export const FormatSelect = withContext<
  HTMLSelectElement,
  Assign<HTMLStyledProps<"select">, ColorPickerFormatSelectBaseProps>
>(ColorPickerFormatSelect, "formatSelect");

export const FormatTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, ColorPickerFormatTriggerBaseProps>
>(ColorPickerFormatTrigger, "formatTrigger");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, ColorPickerLabelBaseProps>
>(ColorPickerLabel, "label");

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerPositionerBaseProps>
>(ColorPickerPositioner, "positioner");

export const SwatchGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerSwatchGroupBaseProps>
>(ColorPickerSwatchGroup, "swatchGroup");

export const SwatchIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerSwatchIndicatorBaseProps>
>(ColorPickerSwatchIndicator, "swatchIndicator");

export const Swatch = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerSwatchBaseProps>
>(ColorPickerSwatch, "swatch");

export const SwatchTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, ColorPickerSwatchTriggerBaseProps>
>(ColorPickerSwatchTrigger, "swatchTrigger");

export const TransparencyGrid = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerTransparencyGridBaseProps>
>(ColorPickerTransparencyGrid, "transparencyGrid");

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, ColorPickerTriggerBaseProps>
>(ColorPickerTrigger, "trigger");

export const ValueSwatch = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerValueSwatchBaseProps>
>(ColorPickerValueSwatch, "swatch");

export const ValueText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"span">, ColorPickerValueTextBaseProps>
>(ColorPickerValueText, "valueText");

export const View = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ColorPickerViewBaseProps>
>(ColorPickerView, "view");

export { ColorPickerContext as Context } from "./color-picker-context";
export { ColorPickerHiddenInput as HiddenInput } from "./color-picker-hidden-input";
