'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type DialogVariantProps, dialog } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { DialogBackdrop } from './dialog-backdrop'
import { DialogCloseTrigger } from './dialog-close-trigger'
import { DialogContent } from './dialog-content'
import { DialogDescription } from './dialog-description'
import { DialogPositioner } from './dialog-positioner'
import { DialogRoot, type DialogRootProps } from './dialog-root'
import { DialogRootProvider, type DialogRootProviderProps } from './dialog-root-provider'
import { DialogTitle } from './dialog-title'
import { DialogTrigger } from './dialog-trigger'

const { withRootProvider, withContext } = createStyleContext(dialog)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider =
  withRootProvider<Assign<DialogRootProviderProps, DialogVariantProps>>(DialogRootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<DialogRootProps, DialogVariantProps>>(DialogRoot)

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

export { DialogContext as Context } from './dialog-context'
