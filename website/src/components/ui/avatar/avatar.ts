'use client'
import type { Assign } from '@ousia-ui/ark'
import { type AvatarVariantProps, avatar } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  AvatarFallback,
  type AvatarFallbackElement,
  type AvatarFallbackProps,
} from './avatar-fallback'
import { AvatarImage, type AvatarImageElement, type AvatarImageProps } from './avatar-image'
import { AvatarRoot, type AvatarRootElement, type AvatarRootProps } from './avatar-root'
import {
  AvatarRootProvider,
  type AvatarRootProviderElement,
  type AvatarRootProviderProps,
} from './avatar-root-provider'

const { withProvider, withContext } = createStyleContext(avatar)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof AvatarRootProviderElement,
  Assign<AvatarRootProviderProps, AvatarVariantProps>
>(AvatarRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof AvatarRootElement,
  Assign<AvatarRootProps, AvatarVariantProps>
>(AvatarRoot, 'root')

export const Fallback = withContext<typeof AvatarFallbackElement, AvatarFallbackProps>(
  AvatarFallback,
  'fallback',
)

export const Image = withContext<typeof AvatarImageElement, AvatarImageProps>(AvatarImage, 'image')

export { AvatarContext as Context } from './avatar-context'
export type { StatusChangeDetails } from '@zag-js/avatar'
