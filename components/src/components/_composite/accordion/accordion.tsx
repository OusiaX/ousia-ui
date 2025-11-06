'use client'
import type { Assign } from '@ousia-ui/ark'
import { type AccordionVariantProps, accordion } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { AccordionItem, type AccordionItemElement, type AccordionItemProps } from './accordion-item'
import {
  AccordionItemContent,
  type AccordionItemContentElement,
  type AccordionItemContentProps,
} from './accordion-item-content'
import {
  AccordionItemIndicator,
  type AccordionItemIndicatorElement,
  type AccordionItemIndicatorProps,
} from './accordion-item-indicator'
import {
  AccordionItemTrigger,
  type AccordionItemTriggerElement,
  type AccordionItemTriggerProps,
} from './accordion-item-trigger'
import { AccordionRoot, type AccordionRootElement, type AccordionRootProps } from './accordion-root'
import {
  AccordionRootProvider,
  type AccordionRootProviderElement,
  type AccordionRootProviderProps,
} from './accordion-root-provider'

const { withProvider, withContext } = createStyleContext(accordion)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof AccordionRootProviderElement,
  Assign<AccordionRootProviderProps, AccordionVariantProps>
>(AccordionRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof AccordionRootElement,
  Assign<AccordionRootProps, AccordionVariantProps>
>(AccordionRoot, 'root')

export const ItemContent = withContext<
  typeof AccordionItemContentElement,
  AccordionItemContentProps
>(AccordionItemContent, 'itemContent')

export const ItemIndicator = withContext<
  typeof AccordionItemIndicatorElement,
  AccordionItemIndicatorProps
>(AccordionItemIndicator, 'itemIndicator')

export const Item = withContext<typeof AccordionItemElement, AccordionItemProps>(
  AccordionItem,
  'item',
)

export const ItemTrigger = withContext<
  typeof AccordionItemTriggerElement,
  AccordionItemTriggerProps
>(AccordionItemTrigger, 'itemTrigger')

export { AccordionContext as Context } from './accordion-context'

export { AccordionItemContext as ItemContext } from './accordion-item-context'

export type {
  FocusChangeDetails,
  ValueChangeDetails,
} from '@zag-js/accordion'
