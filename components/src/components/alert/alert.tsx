'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { ark } from '@ousia-ui/ark'
import { alert } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'

const { withProvider, withContext } = createStyleContext(alert)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ark.div,
  'root',
)

export const Content = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ark.div, 'content')

export const Description = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(ark.div, 'description')

export const Icon = withContext<HTMLOrSVGElement, Assign<HTMLStyledProps<'svg'>, PolymorphicProps>>(
  ark.svg,
  'icon',
)

export const Title = withContext<
  HTMLHeadingElement,
  Assign<HTMLStyledProps<'h5'>, PolymorphicProps>
>(ark.h5, 'title')
