'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type AvatarVariantProps, avatar } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { AvatarFallback } from './avatar-fallback'
import { AvatarImage } from './avatar-image'
import { AvatarRoot, type AvatarRootBaseProps } from './avatar-root'
import { AvatarRootProvider, type AvatarRootProviderBaseProps } from './avatar-root-provider'

const { withProvider, withContext } = createStyleContext(avatar)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, AvatarRootProviderBaseProps>, AvatarVariantProps>
>(AvatarRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, AvatarRootBaseProps>, AvatarVariantProps>
>(AvatarRoot, 'root')

export const Fallback = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(AvatarFallback, 'fallback')

export const Image = withContext<
  HTMLImageElement,
  Assign<HTMLStyledProps<'img'>, PolymorphicProps>
>(AvatarImage, 'image')

export { AvatarContext as Context } from './avatar-context'
export type { StatusChangeDetails } from '@zag-js/avatar'
