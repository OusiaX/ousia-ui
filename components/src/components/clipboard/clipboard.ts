'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type ClipboardVariantProps, clipboard } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { ClipboardControl } from './clipboard-control'
import { ClipboardIndicator } from './clipboard-indicator'
import { ClipboardInput } from './clipboard-input'
import { ClipboardLabel } from './clipboard-label'
import { ClipboardRoot, type ClipboardRootBaseProps } from './clipboard-root'
import {
  ClipboardRootProvider,
  type ClipboardRootProviderBaseProps,
} from './clipboard-root-provider'
import { ClipboardTrigger } from './clipboard-trigger'

const { withProvider, withContext } = createStyleContext(clipboard)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, ClipboardRootProviderBaseProps>, ClipboardVariantProps>
>(ClipboardRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, ClipboardRootBaseProps>, ClipboardVariantProps>
>(ClipboardRoot, 'root')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ClipboardControl, 'control')

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ClipboardIndicator, 'indicator')

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<'input'>, PolymorphicProps>
>(ClipboardInput, 'input')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(ClipboardLabel, 'label')

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(ClipboardTrigger, 'trigger')

export { ClipboardContext as Context } from './clipboard-context'
