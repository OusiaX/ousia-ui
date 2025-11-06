'use client'
import type { Assign } from '@ousia-ui/ark'
import { type PinInputVariantProps, pinInput } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  PinInputControl,
  type PinInputControlElement,
  type PinInputControlProps,
} from './pin-input-control'
import {
  PinInputInput,
  type PinInputInputElement,
  type PinInputInputProps,
} from './pin-input-input'
import {
  PinInputLabel,
  type PinInputLabelElement,
  type PinInputLabelProps,
} from './pin-input-label'
import { PinInputRoot, type PinInputRootElement, type PinInputRootProps } from './pin-input-root'
import {
  PinInputRootProvider,
  type PinInputRootProviderElement,
  type PinInputRootProviderProps,
} from './pin-input-root-provider'

const { withProvider, withContext } = createStyleContext(pinInput)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof PinInputRootProviderElement,
  Assign<PinInputRootProviderProps, PinInputVariantProps>
>(PinInputRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof PinInputRootElement,
  Assign<PinInputRootProps, PinInputVariantProps>
>(PinInputRoot, 'root', { forwardProps: ['mask'] })

export const Control = withContext<typeof PinInputControlElement, PinInputControlProps>(
  PinInputControl,
  'control',
)

export const Input = withContext<typeof PinInputInputElement, PinInputInputProps>(
  PinInputInput,
  'input',
)

export const Label = withContext<typeof PinInputLabelElement, PinInputLabelProps>(
  PinInputLabel,
  'label',
)

export { PinInputContext as Context } from './pin-input-context'
export { PinInputHiddenInput as HiddenInput } from './pin-input-hidden-input'
