'use client'
import type { Assign } from '@ousia-ui/ark'
import { type SwitchRecipeVariantProps, switchRecipe } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { SwitchControl, type SwitchControlElement, type SwitchControlProps } from './switch-control'
import { SwitchLabel, type SwitchLabelElement, type SwitchLabelProps } from './switch-label'
import { SwitchRoot, type SwitchRootElement, type SwitchRootProps } from './switch-root'
import {
  SwitchRootProvider,
  type SwitchRootProviderElement,
  type SwitchRootProviderProps,
} from './switch-root-provider'
import { SwitchThumb, type SwitchThumbElement, type SwitchThumbProps } from './switch-thumb'

const { withProvider, withContext } = createStyleContext(switchRecipe)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof SwitchRootProviderElement,
  Assign<SwitchRootProviderProps, SwitchRecipeVariantProps>
>(SwitchRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof SwitchRootElement,
  Assign<SwitchRootProps, SwitchRecipeVariantProps>
>(SwitchRoot, 'root')

export const Control = withContext<typeof SwitchControlElement, SwitchControlProps>(
  SwitchControl,
  'control',
)

export const Label = withContext<typeof SwitchLabelElement, SwitchLabelProps>(SwitchLabel, 'label')

export const Thumb = withContext<typeof SwitchThumbElement, SwitchThumbProps>(SwitchThumb, 'thumb')

export { SwitchContext as Context } from './switch-context'
export { SwitchHiddenInput as HiddenInput } from './switch-hidden-input'
