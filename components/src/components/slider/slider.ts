"use client";
import type { Assign } from "@ousia-ui/ark";
import { type SliderVariantProps, slider } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { SliderRootProvider, type SliderRootProviderBaseProps } from './slider-root-provider'
import { SliderRoot, type SliderRootBaseProps } from './slider-root'
import { SliderControl, type SliderControlBaseProps } from './slider-control'
import { SliderLabel, type SliderLabelBaseProps } from './slider-label'
import { SliderMarkerGroup, type SliderMarkerGroupBaseProps } from './slider-marker-group'
import { SliderMarker, type SliderMarkerBaseProps } from './slider-marker'
import { SliderRange, type SliderRangeBaseProps } from './slider-range'
import { SliderThumb, type SliderThumbBaseProps } from './slider-thumb'
import { SliderTrack, type SliderTrackBaseProps } from './slider-track'
import { SliderValueText, type SliderValueTextBaseProps } from './slider-value-text'

const { withProvider, withContext } = createStyleContext(slider);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, SliderRootProviderBaseProps>,
    SliderVariantProps
  >
>(SliderRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, SliderRootBaseProps>,
    SliderVariantProps
  >
>(SliderRoot, "root");

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SliderControlBaseProps>
>(SliderControl, "control");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, SliderLabelBaseProps>
>(SliderLabel, "label");

export const MarkerGroup = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SliderMarkerGroupBaseProps>
>(SliderMarkerGroup, "markerGroup");

export const Marker = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, SliderMarkerBaseProps>
>(SliderMarker, "marker");

export const Range = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SliderRangeBaseProps>
>(SliderRange, "range");

export const Thumb = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SliderThumbBaseProps>
>(SliderThumb, "thumb");

export const Track = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, SliderTrackBaseProps>
>(SliderTrack, "track");

export const ValueText = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"span">, SliderValueTextBaseProps>
>(SliderValueText, "valueText");

export { SliderContext as Context } from "./slider-context"
export { SliderHiddenInput as HiddenInput } from "./slider-hidden-input"
