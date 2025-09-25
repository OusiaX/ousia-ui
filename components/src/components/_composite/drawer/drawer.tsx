'use client'
import { type PolymorphicProps, ark, type Assign } from '@ousia-ui/ark'
import { type DrawerVariantProps, drawer } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { DialogRootProvider, type DialogRootProviderBaseProps } from "~/components/dialog/dialog-root-provider";
import { DialogRoot, type DialogRootProps } from "~/components/dialog/dialog-root";
import { DialogBackdrop, type DialogBackdropBaseProps } from "~/components/dialog/dialog-backdrop";
import { DialogCloseTrigger, type DialogCloseTriggerBaseProps } from "~/components/dialog/dialog-close-trigger";
import { DialogContent, type DialogContentBaseProps } from "~/components/dialog/dialog-content";
import { DialogDescription, type DialogDescriptionBaseProps } from "~/components/dialog/dialog-description";
import { DialogPositioner, type DialogPositionerBaseProps } from "~/components/dialog/dialog-positioner";
import { DialogTitle, type DialogTitleBaseProps } from "~/components/dialog/dialog-title";
import { DialogTrigger, type DialogTriggerBaseProps } from "~/components/dialog/dialog-trigger";

const { withRootProvider, withContext } = createStyleContext(drawer)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withRootProvider<
  Assign<DialogRootProviderBaseProps, DrawerVariantProps>
>(DialogRootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<DialogRootProps, DrawerVariantProps>>(DialogRoot)

export const Backdrop = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, DialogBackdropBaseProps>
>(DialogBackdrop, 'backdrop')

export const CloseTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, DialogCloseTriggerBaseProps>
>(DialogCloseTrigger, 'closeTrigger')

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, DialogContentBaseProps>
>(DialogContent, 'content')

export const Description = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, DialogDescriptionBaseProps>
>(DialogDescription, 'description')

export const Positioner = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, DialogPositionerBaseProps>
>(DialogPositioner, 'positioner')

export const Title = withContext<
  HTMLHeadingElement,
  Assign<HTMLStyledProps<'h2'>, DialogTitleBaseProps>
>(DialogTitle, 'title')

export const Trigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, DialogTriggerBaseProps>
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
} from "~/components/dialog/dialog-context"