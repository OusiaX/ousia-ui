'use client'
import type { PolymorphicProps } from '@ousia-ui/ark'
import { ark } from '@ousia-ui/ark'
import { alert } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'

const { withProvider, withContext } = createStyleContext(alert)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<'div', PolymorphicProps>(ark.div, 'root')

export const Content = withContext<'div', PolymorphicProps>(ark.div, 'content')

export const Description = withContext<'div', PolymorphicProps>(ark.div, 'description')

export const Icon = withContext<'svg', PolymorphicProps>(ark.svg, 'icon')

export const Title = withContext<'h5', PolymorphicProps>(ark.h5, 'title')
