'use client'
import type { Assign } from '@ousia-ui/ark'
import { type AccordionVariantProps, accordion } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { AccordionRootProvider, type AccordionRootProviderBaseProps } from './accordion-root-provider'
import { AccordionRoot, type AccordionRootBaseProps } from './accordion-root'
import { AccordionItemContent, type AccordionItemContentBaseProps } from './accordion-item-content'
import { AccordionItemIndicator, type AccordionItemIndicatorBaseProps } from './accordion-item-indicator'
import { AccordionItem, type AccordionItemBaseProps } from './accordion-item'
import { AccordionItemTrigger, type AccordionItemTriggerBaseProps } from './accordion-item-trigger'

const { withProvider, withContext } = createStyleContext(accordion)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, AccordionRootProviderBaseProps>, AccordionVariantProps>
>(AccordionRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, AccordionRootBaseProps>, AccordionVariantProps>
>(AccordionRoot, 'root')

export const ItemContent = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, AccordionItemContentBaseProps>
>(AccordionItemContent, 'itemContent')

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, AccordionItemIndicatorBaseProps>
>(AccordionItemIndicator, 'itemIndicator')

export const Item = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, AccordionItemBaseProps>
>(AccordionItem, 'item')

export const ItemTrigger = withContext<
  HTMLButtonElement,
  Assign<HTMLStyledProps<'button'>, AccordionItemTriggerBaseProps>
>(AccordionItemTrigger, 'itemTrigger')

export {
  AccordionContext as Context,
} from './accordion-context'

export {
  AccordionItemContext as ItemContext,
} from './accordion-item-context'

export type {
  FocusChangeDetails,
  ValueChangeDetails,
} from '@zag-js/accordion'
