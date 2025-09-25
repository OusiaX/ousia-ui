'use client'
import { type HTMLArkProps, type PolymorphicProps, ark, arkMemo, type Assign } from '@ousia-ui/ark'
import { type CardVariantProps, card } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'

const { withProvider, withContext } = createStyleContext(card)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, CardVariantProps>
>(arkMemo.div, 'root')

export const Body = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ark.div,
  'body',
)

export const Description = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ark.div, 'description')

export const Footer = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ark.div,
  'footer',
)

export const Header = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ark.div,
  'header',
)

export const Title = withContext<
  HTMLHeadingElement,
  Assign<HTMLStyledProps<'h3'>, HTMLArkProps<'h3'>>
>(ark.h3, 'title')
