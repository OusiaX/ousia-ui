"use client";
import type { Assign } from "@ousia-ui/ark";
import { type PaginationVariantProps, pagination } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { PaginationRootProvider, type PaginationRootProviderBaseProps } from './pagination-root-provider';
import { PaginationRoot, type PaginationRootBaseProps } from './pagination-root';
import { PaginationEllipsis, type PaginationEllipsisBaseProps } from './pagination-ellipsis';
import { PaginationItem, type PaginationItemBaseProps } from './pagination-item';
import { PaginationNextTrigger, type PaginationNextTriggerBaseProps } from './pagination-next-trigger';
import { PaginationPrevTrigger, type PaginationPrevTriggerBaseProps } from './pagination-prev-trigger';

const { withProvider, withContext } = createStyleContext(pagination);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLElement,
  Assign<
    Assign<HTMLStyledProps<"nav">, PaginationRootProviderBaseProps>,
    PaginationVariantProps
  >
>(PaginationRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLElement,
  Assign<
    Assign<HTMLStyledProps<"nav">, PaginationRootBaseProps>,
    PaginationVariantProps
  >
>(PaginationRoot, "root", { forwardProps: ["page"] });

export const Ellipsis = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, PaginationEllipsisBaseProps>
>(PaginationEllipsis, "ellipsis");

export const Item = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, PaginationItemBaseProps>
>(PaginationItem, "item");

export const NextTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, PaginationNextTriggerBaseProps>
>(PaginationNextTrigger, "nextTrigger");

export const PrevTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<"button">, PaginationPrevTriggerBaseProps>
>(PaginationPrevTrigger, "prevTrigger");

export { PaginationContext as Context } from "./pagination-context";
