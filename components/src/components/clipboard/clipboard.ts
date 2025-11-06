'use client'
import type { Assign } from '@ousia-ui/ark'
import { type ClipboardVariantProps, clipboard } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  ClipboardControl,
  type ClipboardControlElement,
  type ClipboardControlProps,
} from './clipboard-control'
import {
  ClipboardIndicator,
  type ClipboardIndicatorElement,
  type ClipboardIndicatorProps,
} from './clipboard-indicator'
import {
  ClipboardInput,
  type ClipboardInputElement,
  type ClipboardInputProps,
} from './clipboard-input'
import {
  ClipboardLabel,
  type ClipboardLabelElement,
  type ClipboardLabelProps,
} from './clipboard-label'
import { ClipboardRoot, type ClipboardRootElement, type ClipboardRootProps } from './clipboard-root'
import {
  ClipboardRootProvider,
  type ClipboardRootProviderElement,
  type ClipboardRootProviderProps,
} from './clipboard-root-provider'
import {
  ClipboardTrigger,
  type ClipboardTriggerElement,
  type ClipboardTriggerProps,
} from './clipboard-trigger'

const { withProvider, withContext } = createStyleContext(clipboard)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof ClipboardRootProviderElement,
  Assign<ClipboardRootProviderProps, ClipboardVariantProps>
>(ClipboardRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof ClipboardRootElement,
  Assign<ClipboardRootProps, ClipboardVariantProps>
>(ClipboardRoot, 'root')

export const Control = withContext<typeof ClipboardControlElement, ClipboardControlProps>(
  ClipboardControl,
  'control',
)

export const Indicator = withContext<typeof ClipboardIndicatorElement, ClipboardIndicatorProps>(
  ClipboardIndicator,
  'indicator',
)

export const Input = withContext<typeof ClipboardInputElement, ClipboardInputProps>(
  ClipboardInput,
  'input',
)

export const Label = withContext<typeof ClipboardLabelElement, ClipboardLabelProps>(
  ClipboardLabel,
  'label',
)

export const Trigger = withContext<typeof ClipboardTriggerElement, ClipboardTriggerProps>(
  ClipboardTrigger,
  'trigger',
)

export { ClipboardContext as Context } from './clipboard-context'
