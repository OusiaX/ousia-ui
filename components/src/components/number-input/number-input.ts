"use client";
import type { Assign } from "@ousia-ui/ark";
import {
  type NumberInputVariantProps,
  numberInput,
} from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { NumberInputRootProvider, type NumberInputRootProviderBaseProps } from './number-input-root-provider';
import { NumberInputRoot, type NumberInputRootBaseProps } from './number-input-root';
import { NumberInputControl, type NumberInputControlBaseProps } from './number-input-control';
import { NumberInputDecrementTrigger, type NumberInputDecrementTriggerBaseProps } from './number-input-decrement-trigger';
import { NumberInputIncrementTrigger, type NumberInputIncrementTriggerBaseProps } from './number-input-increment-trigger';
import { NumberInputInput, type NumberInputInputBaseProps } from './number-input-input';
import { NumberInputLabel, type NumberInputLabelBaseProps } from './number-input-label';
import { NumberInputScrubber, type NumberInputScrubberBaseProps } from './number-input-scrubber';
import { NumberInputValueText, type NumberInputValueTextBaseProps } from './number-input-value-text';

const { withProvider, withContext } = createStyleContext(numberInput);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, NumberInputRootProviderBaseProps>,
    NumberInputVariantProps
  >
>(NumberInputRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, NumberInputRootBaseProps>,
    NumberInputVariantProps
  >
>(NumberInputRoot, "root");

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, NumberInputControlBaseProps>
>(NumberInputControl, "control");

export const DecrementTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, NumberInputDecrementTriggerBaseProps>
>(NumberInputDecrementTrigger, "decrementTrigger");

export const IncrementTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, NumberInputIncrementTriggerBaseProps>
>(NumberInputIncrementTrigger, "incrementTrigger");

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<"input">, NumberInputInputBaseProps>
>(NumberInputInput, "input");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, NumberInputLabelBaseProps>
>(NumberInputLabel, "label");

export const Scrubber = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, NumberInputScrubberBaseProps>
>(NumberInputScrubber, "scrubber");

export const ValueText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, NumberInputValueTextBaseProps>
>(NumberInputValueText, "valueText");

export { NumberInputContext as Context } from "./number-input-context";
