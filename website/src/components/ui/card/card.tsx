'use client'
import { type Assign, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { type CardVariantProps, card } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'

const { withProvider, withContext } = createStyleContext(card)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<'div', Assign<PolymorphicProps, CardVariantProps>>(ark.div, 'root')

export const Body = withContext<'div', PolymorphicProps>(ark.div, 'body')

export const Description = withContext<'div', PolymorphicProps>(ark.div, 'description')

export const Footer = withContext<'div', PolymorphicProps>(ark.div, 'footer')

export const Header = withContext<'div', PolymorphicProps>(ark.div, 'header')

export const Title = withContext<'h3', PolymorphicProps>(ark.h3, 'title')
