'use client'
import type { Assign } from '@ousia-ui/ark'
import { type CheckboxVariantProps, checkbox } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  CheckboxControl,
  type CheckboxControlElement,
  type CheckboxControlProps,
} from './checkbox-control'
import { CheckboxGroup, type CheckboxGroupElement, type CheckboxGroupProps } from './checkbox-group'
import {
  CheckboxIndicator,
  type CheckboxIndicatorElement,
  type CheckboxIndicatorProps,
} from './checkbox-indicator'
import { CheckboxLabel, type CheckboxLabelElement, type CheckboxLabelProps } from './checkbox-label'
import { CheckboxRoot, type CheckboxRootElement, type CheckboxRootProps } from './checkbox-root'
import {
  CheckboxRootProvider,
  type CheckboxRootProviderElement,
  type CheckboxRootProviderProps,
} from './checkbox-root-provider'

const { withProvider, withContext } = createStyleContext(checkbox)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof CheckboxRootProviderElement,
  Assign<CheckboxRootProviderProps, CheckboxVariantProps>
>(CheckboxRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof CheckboxRootElement,
  Assign<CheckboxRootProps, CheckboxVariantProps>
>(CheckboxRoot, 'root')

export const Control = withContext<typeof CheckboxControlElement, CheckboxControlProps>(
  CheckboxControl,
  'control',
)

export const Group = withContext<typeof CheckboxGroupElement, CheckboxGroupProps>(
  CheckboxGroup,
  'group',
)

export const Indicator = withContext<typeof CheckboxIndicatorElement, CheckboxIndicatorProps>(
  CheckboxIndicator,
  'indicator',
)

export const Label = withContext<typeof CheckboxLabelElement, CheckboxLabelProps>(
  CheckboxLabel,
  'label',
)

export { CheckboxContext as Context } from './checkbox-context'

export { CheckboxHiddenInput as HiddenInput } from './checkbox-hidden-input'
