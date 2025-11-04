'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { toast } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { ToastActionTrigger } from './toast-action-trigger'
import { ToastCloseTrigger } from './toast-close-trigger'
import { ToastDescription } from './toast-description'
import { ToastRoot } from './toast-root'
import { ToastTitle } from './toast-title'

const { withProvider, withContext } = createStyleContext(toast)

export const Root = withProvider<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ToastRoot,
  'root',
)

export const ActionTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(ToastActionTrigger, 'actionTrigger')

export const CloseTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(ToastCloseTrigger, 'closeTrigger')

export const Description = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ToastDescription, 'description')

export const Title = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ToastTitle,
  'title',
)

export { ToastContext as Context, type ToastContextProps as ContextProps } from './toast-context'
export { Toaster, type ToasterProps } from './toaster'
export { createToaster } from './create-toaster'
