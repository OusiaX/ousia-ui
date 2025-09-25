"use client";
import type { Assign } from "@ousia-ui/ark";
import { type ProgressVariantProps, progress } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { ProgressCircle, type ProgressCircleBaseProps } from './progress-circle';
import { ProgressCircleRange, type ProgressCircleRangeBaseProps } from './progress-circle-range';
import { ProgressCircleTrack, type ProgressCircleTrackBaseProps } from './progress-circle-track';
import { ProgressLabel, type ProgressLabelBaseProps } from './progress-label';
import { ProgressRange, type ProgressRangeBaseProps } from './progress-range';
import { ProgressRootProvider, type ProgressRootProviderBaseProps } from './progress-root-provider';
import { ProgressRoot, type ProgressRootBaseProps } from './progress-root';
import { ProgressTrack, type ProgressTrackBaseProps } from './progress-track';
import { ProgressValueText, type ProgressValueTextBaseProps } from './progress-value-text';
import { ProgressView, type ProgressViewBaseProps } from './progress-view';

const { withProvider, withContext } = createStyleContext(progress);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, ProgressRootProviderBaseProps>,
    ProgressVariantProps
  >
>(ProgressRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, ProgressRootBaseProps>,
    ProgressVariantProps
  >
>(ProgressRoot, "root");

export const Circle = withContext<
  SVGSVGElement,
  Assign<HTMLStyledProps<"svg">, ProgressCircleBaseProps>
>(ProgressCircle, "circle");

export const CircleRange = withContext<
  SVGCircleElement,
  Assign<HTMLStyledProps<"circle">, ProgressCircleRangeBaseProps>
>(ProgressCircleRange, "circleRange");

export const CircleTrack = withContext<
  SVGCircleElement,
  Assign<HTMLStyledProps<"circle">, ProgressCircleTrackBaseProps>
>(ProgressCircleTrack, "circleTrack");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, ProgressLabelBaseProps>
>(ProgressLabel, "label");

export const Range = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ProgressRangeBaseProps>
>(ProgressRange, "range");

export const Track = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, ProgressTrackBaseProps>
>(ProgressTrack, "track");

export const ValueText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, ProgressValueTextBaseProps>
>(ProgressValueText, "valueText");

export const View = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, ProgressViewBaseProps>
>(ProgressView, "view");

export { ProgressContext as Context } from "./progress-context";
