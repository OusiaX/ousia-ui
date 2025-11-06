'use client'
import type { PolymorphicProps } from '@ousia-ui/ark'
import { toast } from 'styled-system/recipes'

import { createStyleContext } from '~/utils/create-style-context'
import {
  ToastActionTrigger,
  type ToastActionTriggerElement,
  type ToastActionTriggerProps,
} from './toast-action-trigger'
import {
  ToastCloseTrigger,
  type ToastCloseTriggerElement,
  type ToastCloseTriggerProps,
} from './toast-close-trigger'
import {
  ToastDescription,
  type ToastDescriptionElement,
  type ToastDescriptionProps,
} from './toast-description'
import { ToastRoot, type ToastRootElement, type ToastRootProps } from './toast-root'
import { ToastTitle, type ToastTitleElement, type ToastTitleProps } from './toast-title'

const { withProvider, withContext } = createStyleContext(toast)

export const Root = withProvider<typeof ToastRootElement, ToastRootProps>(ToastRoot, 'root')

export const ActionTrigger = withContext<typeof ToastActionTriggerElement, ToastActionTriggerProps>(
  ToastActionTrigger,
  'actionTrigger',
)

export const CloseTrigger = withContext<typeof ToastCloseTriggerElement, ToastCloseTriggerProps>(
  ToastCloseTrigger,
  'closeTrigger',
)

export const Description = withContext<typeof ToastDescriptionElement, ToastDescriptionProps>(
  ToastDescription,
  'description',
)

export const Title = withContext<typeof ToastTitleElement, ToastTitleProps>(ToastTitle, 'title')

export { ToastContext as Context, type ToastContextProps as ContextProps } from './toast-context'
export { Toaster, type ToasterProps } from './toaster'
export { createToaster } from './create-toaster'
