'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type SwitchRecipeVariantProps, switchRecipe } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { SwitchControl } from './switch-control'
import { SwitchLabel } from './switch-label'
import { SwitchRoot, type SwitchRootBaseProps } from './switch-root'
import { SwitchRootProvider, type SwitchRootProviderBaseProps } from './switch-root-provider'
import { SwitchThumb } from './switch-thumb'

const { withProvider, withContext } = createStyleContext(switchRecipe)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLLabelElement,
  Assign<Assign<HTMLStyledProps<'label'>, SwitchRootProviderBaseProps>, SwitchRecipeVariantProps>
>(SwitchRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLLabelElement,
  Assign<Assign<HTMLStyledProps<'label'>, SwitchRootBaseProps>, SwitchRecipeVariantProps>
>(SwitchRoot, 'root')

export const Control = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(SwitchControl, 'control')

export const Label = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(SwitchLabel, 'label')

export const Thumb = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(SwitchThumb, 'thumb')

export { SwitchContext as Context } from './switch-context'
export { SwitchHiddenInput as HiddenInput } from './switch-hidden-input'
