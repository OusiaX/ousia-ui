'use client'
import type { Assign } from '@ousia-ui/ark'
import { type NumberInputVariantProps, numberInput } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  NumberInputControl,
  type NumberInputControlElement,
  type NumberInputControlProps,
} from './number-input-control'
import {
  NumberInputDecrementTrigger,
  type NumberInputDecrementTriggerElement,
  type NumberInputDecrementTriggerProps,
} from './number-input-decrement-trigger'
import {
  NumberInputIncrementTrigger,
  type NumberInputIncrementTriggerElement,
  type NumberInputIncrementTriggerProps,
} from './number-input-increment-trigger'
import {
  NumberInputInput,
  type NumberInputInputElement,
  type NumberInputInputProps,
} from './number-input-input'
import {
  NumberInputLabel,
  type NumberInputLabelElement,
  type NumberInputLabelProps,
} from './number-input-label'
import {
  NumberInputRoot,
  type NumberInputRootElement,
  type NumberInputRootProps,
} from './number-input-root'
import {
  NumberInputRootProvider,
  type NumberInputRootProviderElement,
  type NumberInputRootProviderProps,
} from './number-input-root-provider'
import {
  NumberInputScrubber,
  type NumberInputScrubberElement,
  type NumberInputScrubberProps,
} from './number-input-scrubber'
import {
  NumberInputValueText,
  type NumberInputValueTextElement,
  type NumberInputValueTextProps,
} from './number-input-value-text'

const { withProvider, withContext } = createStyleContext(numberInput)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof NumberInputRootProviderElement,
  Assign<NumberInputRootProviderProps, NumberInputVariantProps>
>(NumberInputRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof NumberInputRootElement,
  Assign<NumberInputRootProps, NumberInputVariantProps>
>(NumberInputRoot, 'root')

export const Control = withContext<typeof NumberInputControlElement, NumberInputControlProps>(
  NumberInputControl,
  'control',
)

export const DecrementTrigger = withContext<
  typeof NumberInputDecrementTriggerElement,
  NumberInputDecrementTriggerProps
>(NumberInputDecrementTrigger, 'decrementTrigger')

export const IncrementTrigger = withContext<
  typeof NumberInputIncrementTriggerElement,
  NumberInputIncrementTriggerProps
>(NumberInputIncrementTrigger, 'incrementTrigger')

export const Input = withContext<typeof NumberInputInputElement, NumberInputInputProps>(
  NumberInputInput,
  'input',
)

export const Label = withContext<typeof NumberInputLabelElement, NumberInputLabelProps>(
  NumberInputLabel,
  'label',
)

export const Scrubber = withContext<typeof NumberInputScrubberElement, NumberInputScrubberProps>(
  NumberInputScrubber,
  'scrubber',
)

export const ValueText = withContext<typeof NumberInputValueTextElement, NumberInputValueTextProps>(
  NumberInputValueText,
  'valueText',
)

export { NumberInputContext as Context } from './number-input-context'
