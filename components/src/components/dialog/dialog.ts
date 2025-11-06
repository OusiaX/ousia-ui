'use client'
import type { Assign } from '@ousia-ui/ark'
import { type DialogVariantProps, dialog } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  DialogBackdrop,
  type DialogBackdropElement,
  type DialogBackdropProps,
} from './dialog-backdrop'
import {
  DialogCloseTrigger,
  type DialogCloseTriggerElement,
  type DialogCloseTriggerProps,
} from './dialog-close-trigger'
import { DialogContent, type DialogContentElement, type DialogContentProps } from './dialog-content'
import {
  DialogDescription,
  type DialogDescriptionElement,
  type DialogDescriptionProps,
} from './dialog-description'
import {
  DialogPositioner,
  type DialogPositionerElement,
  type DialogPositionerProps,
} from './dialog-positioner'
import { DialogRoot, type DialogRootProps } from './dialog-root'
import { DialogRootProvider, type DialogRootProviderProps } from './dialog-root-provider'
import { DialogTitle, type DialogTitleElement, type DialogTitleProps } from './dialog-title'
import { DialogTrigger, type DialogTriggerElement, type DialogTriggerProps } from './dialog-trigger'

const { withRootProvider, withContext } = createStyleContext(dialog)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider =
  withRootProvider<Assign<DialogRootProviderProps, DialogVariantProps>>(DialogRootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<DialogRootProps, DialogVariantProps>>(DialogRoot)

export const Backdrop = withContext<typeof DialogBackdropElement, DialogBackdropProps>(
  DialogBackdrop,
  'backdrop',
)

export const CloseTrigger = withContext<typeof DialogCloseTriggerElement, DialogCloseTriggerProps>(
  DialogCloseTrigger,
  'closeTrigger',
)

export const Content = withContext<typeof DialogContentElement, DialogContentProps>(
  DialogContent,
  'content',
)

export const Description = withContext<typeof DialogDescriptionElement, DialogDescriptionProps>(
  DialogDescription,
  'description',
)

export const Positioner = withContext<typeof DialogPositionerElement, DialogPositionerProps>(
  DialogPositioner,
  'positioner',
)

export const Title = withContext<typeof DialogTitleElement, DialogTitleProps>(DialogTitle, 'title')

export const Trigger = withContext<typeof DialogTriggerElement, DialogTriggerProps>(
  DialogTrigger,
  'trigger',
)

export { DialogContext as Context } from './dialog-context'
