"use client";
import type { Assign } from "@ousia-ui/ark";
import { type PinInputVariantProps, pinInput } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { PinInputRootProvider, type PinInputRootProviderBaseProps } from './pin-input-root-provider';
import { PinInputRoot, type PinInputRootBaseProps } from './pin-input-root';
import { PinInputControl, type PinInputControlBaseProps } from './pin-input-control';
import { PinInputInput, type PinInputInputBaseProps } from './pin-input-input';
import { PinInputLabel, type PinInputLabelBaseProps } from './pin-input-label';

const { withProvider, withContext } = createStyleContext(pinInput);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, PinInputRootProviderBaseProps>,
    PinInputVariantProps
  >
>(PinInputRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, PinInputRootBaseProps>,
    PinInputVariantProps
  >
>(PinInputRoot, "root", { forwardProps: ["mask"] });

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PinInputControlBaseProps>
>(PinInputControl, "control");

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<"input">, PinInputInputBaseProps>
>(PinInputInput, "input");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, PinInputLabelBaseProps>
>(PinInputLabel, "label");

export { PinInputContext as Context } from "./pin-input-context";
export { PinInputHiddenInput as HiddenInput } from "./pin-input-hidden-input";
