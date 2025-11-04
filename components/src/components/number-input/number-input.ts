'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type NumberInputVariantProps, numberInput } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { NumberInputControl } from './number-input-control'
import { NumberInputDecrementTrigger } from './number-input-decrement-trigger'
import { NumberInputIncrementTrigger } from './number-input-increment-trigger'
import { NumberInputInput } from './number-input-input'
import { NumberInputLabel } from './number-input-label'
import { NumberInputRoot } from './number-input-root'
import { NumberInputRootProvider } from './number-input-root-provider'
import { NumberInputScrubber } from './number-input-scrubber'
import { NumberInputValueText } from './number-input-value-text'

const { withProvider, withContext } = createStyleContext(numberInput)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, NumberInputVariantProps>
>(NumberInputRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, NumberInputVariantProps>
>(NumberInputRoot, 'root')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(NumberInputControl, 'control')

export const DecrementTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(NumberInputDecrementTrigger, 'decrementTrigger')

export const IncrementTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(NumberInputIncrementTrigger, 'incrementTrigger')

export const Input = withContext<
  HTMLInputElement,
  Assign<HTMLStyledProps<'input'>, PolymorphicProps>
>(NumberInputInput, 'input')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(NumberInputLabel, 'label')

export const Scrubber = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(NumberInputScrubber, 'scrubber')

export const ValueText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(NumberInputValueText, 'valueText')

export { NumberInputContext as Context } from './number-input-context'
