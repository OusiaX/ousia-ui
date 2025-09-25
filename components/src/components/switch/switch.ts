"use client";
import type { Assign } from "@ousia-ui/ark";
import { SwitchRootProvider, type SwitchRootProviderBaseProps } from './switch-root-provider'
import { SwitchRoot, type SwitchRootBaseProps } from './switch-root'
import { SwitchControl, type SwitchControlBaseProps } from './switch-control'
import { SwitchLabel, type SwitchLabelBaseProps } from './switch-label'
import { SwitchThumb, type SwitchThumbBaseProps } from './switch-thumb'
import {
  type SwitchRecipeVariantProps,
  switchRecipe,
} from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";

const { withProvider, withContext } = createStyleContext(switchRecipe);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLLabelElement,
  Assign<
    Assign<HTMLStyledProps<"label">, SwitchRootProviderBaseProps>,
    SwitchRecipeVariantProps
  >
>(SwitchRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLLabelElement,
  Assign<
    Assign<HTMLStyledProps<"label">, SwitchRootBaseProps>,
    SwitchRecipeVariantProps
  >
>(SwitchRoot, "root");

export const Control = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, SwitchControlBaseProps>
>(SwitchControl, "control");

export const Label = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, SwitchLabelBaseProps>
>(SwitchLabel, "label");

export const Thumb = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, SwitchThumbBaseProps>
>(SwitchThumb, "thumb");

export { SwitchContext as Context } from "./switch-context"
export { SwitchHiddenInput as HiddenInput } from "./switch-hidden-input"
