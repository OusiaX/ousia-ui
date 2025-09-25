'use client'
import type { Assign } from '@ousia-ui/ark'
import { type CheckboxVariantProps, checkbox } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { CheckboxRootProvider, type CheckboxRootProviderBaseProps } from './checkbox-root-provider'
import { CheckboxRoot, type CheckboxRootBaseProps } from './checkbox-root'
import { CheckboxControl, type CheckboxControlBaseProps } from './checkbox-control'
import { CheckboxGroup, type CheckboxGroupBaseProps } from './checkbox-group'
import { CheckboxIndicator, type CheckboxIndicatorBaseProps } from './checkbox-indicator'
import { CheckboxLabel, type CheckboxLabelBaseProps } from './checkbox-label'

const { withProvider, withContext } = createStyleContext(checkbox)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLLabelElement,
  Assign<Assign<HTMLStyledProps<'label'>, CheckboxRootProviderBaseProps>, CheckboxVariantProps>
>(CheckboxRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLLabelElement,
  Assign<Assign<HTMLStyledProps<'label'>, CheckboxRootBaseProps>, CheckboxVariantProps>
>(CheckboxRoot, 'root')

export const Control = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, CheckboxControlBaseProps>
>(CheckboxControl, 'control')

export const Group = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, CheckboxGroupBaseProps>
>(CheckboxGroup, 'group')

export const Indicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, CheckboxIndicatorBaseProps>
>(CheckboxIndicator, 'indicator')

export const Label = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, CheckboxLabelBaseProps>
>(CheckboxLabel, 'label')

export {
  CheckboxContext as Context,
} from "./checkbox-context";

export { CheckboxHiddenInput as HiddenInput } from "./checkbox-hidden-input";
