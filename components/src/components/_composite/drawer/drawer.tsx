'use client'
import { type Assign, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { type DrawerVariantProps, drawer } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { DialogBackdrop } from '~/components/dialog/dialog-backdrop'
import { DialogCloseTrigger } from '~/components/dialog/dialog-close-trigger'
import { DialogContent } from '~/components/dialog/dialog-content'
import { DialogDescription } from '~/components/dialog/dialog-description'
import { DialogPositioner } from '~/components/dialog/dialog-positioner'
import { DialogRoot, type DialogRootProps } from '~/components/dialog/dialog-root'
import {
  DialogRootProvider,
  type DialogRootProviderBaseProps,
} from '~/components/dialog/dialog-root-provider'
import { DialogTitle } from '~/components/dialog/dialog-title'
import { DialogTrigger } from '~/components/dialog/dialog-trigger'
import { createStyleContext } from '~/utils/create-style-context'

const { withRootProvider, withContext } = createStyleContext(drawer)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider =
  withRootProvider<Assign<DialogRootProviderBaseProps, DrawerVariantProps>>(DialogRootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<DialogRootProps, DrawerVariantProps>>(DialogRoot)

export const Backdrop = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(DialogBackdrop, 'backdrop')

export const CloseTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(DialogCloseTrigger, 'closeTrigger')

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(DialogContent, 'content')

export const Description = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(DialogDescription, 'description')

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(DialogPositioner, 'positioner')

export const Title = withContext<
  HTMLHeadingElement,
  Assign<HTMLStyledProps<'h2'>, PolymorphicProps>
>(DialogTitle, 'title')

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, PolymorphicProps>
>(DialogTrigger, 'trigger')

export const Header = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ark.div,
  'header',
)

export const Body = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ark.div,
  'body',
)

export const Footer = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ark.div,
  'footer',
)

export {
  DialogContext as Context,
  type DialogContextProps as ContextProps,
} from '~/components/dialog/dialog-context'
