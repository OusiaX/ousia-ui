"use client";
import type { Assign } from "@ousia-ui/ark";
import { AvatarRootProvider, type AvatarRootProviderBaseProps } from './avatar-root-provider'
import { AvatarRoot, type AvatarRootBaseProps } from './avatar-root'
import { AvatarFallback, type AvatarFallbackBaseProps } from './avatar-fallback'
import { AvatarImage, type AvatarImageBaseProps } from './avatar-image'
import { type AvatarVariantProps, avatar } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";

const { withProvider, withContext } = createStyleContext(avatar);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, AvatarRootProviderBaseProps>,
    AvatarVariantProps
  >
>(AvatarRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, AvatarRootBaseProps>,
    AvatarVariantProps
  >
>(AvatarRoot, "root");

export const Fallback = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, AvatarFallbackBaseProps>
>(AvatarFallback, "fallback");

export const Image = withContext<
  HTMLImageElement,
  Assign<HTMLStyledProps<"img">, AvatarImageBaseProps>
>(AvatarImage, "image");

export { AvatarContext as Context } from './avatar-context'
export type { StatusChangeDetails } from '@zag-js/avatar'
