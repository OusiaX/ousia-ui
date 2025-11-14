'use client'
import { type Assign, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { type DrawerVariantProps, drawer } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import {
  DialogBackdrop,
  type DialogBackdropElement,
  type DialogBackdropProps,
} from '~/components/ui/dialog/dialog-backdrop'
import {
  DialogCloseTrigger,
  type DialogCloseTriggerElement,
  type DialogCloseTriggerProps,
} from '~/components/ui/dialog/dialog-close-trigger'
import {
  DialogContent,
  type DialogContentElement,
  type DialogContentProps,
} from '~/components/ui/dialog/dialog-content'
import {
  DialogDescription,
  type DialogDescriptionElement,
  type DialogDescriptionProps,
} from '~/components/ui/dialog/dialog-description'
import {
  DialogPositioner,
  type DialogPositionerElement,
  type DialogPositionerProps,
} from '~/components/ui/dialog/dialog-positioner'
import { DialogRoot, type DialogRootProps } from '~/components/ui/dialog/dialog-root'
import {
  DialogRootProvider,
  type DialogRootProviderProps,
} from '~/components/ui/dialog/dialog-root-provider'
import {
  DialogTitle,
  type DialogTitleElement,
  type DialogTitleProps,
} from '~/components/ui/dialog/dialog-title'
import {
  DialogTrigger,
  type DialogTriggerElement,
  type DialogTriggerProps,
} from '~/components/ui/dialog/dialog-trigger'
import { createStyleContext } from '~/utils/create-style-context'

const { withRootProvider, withContext } = createStyleContext(drawer)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider =
  withRootProvider<Assign<DialogRootProviderProps, DrawerVariantProps>>(DialogRootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<DialogRootProps, DrawerVariantProps>>(DialogRoot)

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

export const Header = withContext<'div', PolymorphicProps>(ark.div, 'header')

export const Body = withContext<'div', PolymorphicProps>(ark.div, 'body')

export const Footer = withContext<'div', PolymorphicProps>(ark.div, 'footer')

export {
  DialogContext as Context,
  type DialogContextProps as ContextProps,
} from '~/components/ui/dialog/dialog-context'
