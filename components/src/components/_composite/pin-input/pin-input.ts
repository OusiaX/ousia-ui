'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type PinInputVariantProps, pinInput } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { PinInputControl } from './pin-input-control'
import { PinInputInput } from './pin-input-input'
import { PinInputLabel } from './pin-input-label'
import { PinInputRoot } from './pin-input-root'
import { PinInputRootProvider } from './pin-input-root-provider'

const { withProvider, withContext } = createStyleContext(pinInput)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, PinInputVariantProps>
>(PinInputRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, PinInputVariantProps>
>(PinInputRoot, 'root', { forwardProps: ['mask'] })

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(PinInputControl, 'control')

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<'input'>, PolymorphicProps>
>(PinInputInput, 'input')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(PinInputLabel, 'label')

export { PinInputContext as Context } from './pin-input-context'
export { PinInputHiddenInput as HiddenInput } from './pin-input-hidden-input'
