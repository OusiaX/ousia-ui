"use client";
import type { Assign } from "@ousia-ui/ark";
import { ToggleGroupRootProvider, type ToggleGroupRootProviderBaseProps } from './toggle-group-root-provider';
import { ToggleGroupRoot, type ToggleGroupRootBaseProps } from './toggle-group-root';
import { ToggleGroupItem, type ToggleGroupItemBaseProps } from './toggle-group-item';
import {
  type ToggleGroupVariantProps,
  toggleGroup,
} from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";

const { withProvider, withContext } = createStyleContext(toggleGroup);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, ToggleGroupRootProviderBaseProps>,
    ToggleGroupVariantProps
  >
>(ToggleGroupRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, ToggleGroupRootBaseProps>,
    ToggleGroupVariantProps
  >
>(ToggleGroupRoot, "root");

export const Item = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, ToggleGroupItemBaseProps>
>(ToggleGroupItem, "indicator");

export { ToggleGroupContext as Context } from "./toggle-group-context";
