"use client";
import type { Assign } from "@ousia-ui/ark";
import {
  type RatingGroupVariantProps,
  ratingGroup,
} from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { RatingGroupRootProvider, type RatingGroupRootProviderBaseProps } from './rating-group-root-provider';
import { RatingGroupRoot, type RatingGroupRootBaseProps } from './rating-group-root';
import { RatingGroupControl, type RatingGroupControlBaseProps } from './rating-group-control';
import { RatingGroupItem, type RatingGroupItemBaseProps } from './rating-group-item';
import { RatingGroupLabel, type RatingGroupLabelBaseProps } from './rating-group-label';
import { RatingGroupHiddenInput } from './rating-group-hidden-input';
import { RatingGroupContext } from './rating-group-context';
import { RatingGroupItemContext } from './rating-group-item-context';

const { withProvider, withContext } = createStyleContext(ratingGroup);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, RatingGroupRootProviderBaseProps>,
    RatingGroupVariantProps
  >
>(RatingGroupRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, RatingGroupRootBaseProps>,
    RatingGroupVariantProps
  >
>(RatingGroupRoot, "root");

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, RatingGroupControlBaseProps>
>(RatingGroupControl, "control");

export const Item = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, RatingGroupItemBaseProps>
>(RatingGroupItem, "item");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, RatingGroupLabelBaseProps>
>(RatingGroupLabel, "label");

export {
  RatingGroupContext as Context,
  RatingGroupItemContext as ItemContext,
  RatingGroupHiddenInput as HiddenInput,
};

