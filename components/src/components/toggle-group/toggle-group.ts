'use client'
import type { Assign } from '@ousia-ui/ark'
import { type ToggleGroupVariantProps, toggleGroup } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  ToggleGroupItem,
  type ToggleGroupItemElement,
  type ToggleGroupItemProps,
} from './toggle-group-item'
import {
  ToggleGroupRoot,
  type ToggleGroupRootElement,
  type ToggleGroupRootProps,
} from './toggle-group-root'
import {
  ToggleGroupRootProvider,
  type ToggleGroupRootProviderElement,
  type ToggleGroupRootProviderProps,
} from './toggle-group-root-provider'

const { withProvider, withContext } = createStyleContext(toggleGroup)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof ToggleGroupRootProviderElement,
  Assign<ToggleGroupRootProviderProps, ToggleGroupVariantProps>
>(ToggleGroupRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof ToggleGroupRootElement,
  Assign<ToggleGroupRootProps, ToggleGroupVariantProps>
>(ToggleGroupRoot, 'root')

export const Item = withContext<typeof ToggleGroupItemElement, ToggleGroupItemProps>(
  ToggleGroupItem,
  'item',
)

export { ToggleGroupContext as Context } from './toggle-group-context'
