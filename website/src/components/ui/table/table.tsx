'use client'
import { type Assign, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { type TableVariantProps, table } from 'styled-system/recipes'
import { createStyleContext } from '~/utils/create-style-context'

const { withProvider, withContext } = createStyleContext(table)

export type RootProps = Assign<PolymorphicProps, TableVariantProps>
export const Root = withProvider<'table', RootProps>(ark.table, 'root')

export const Body = withContext<'tbody', PolymorphicProps>(ark.tbody, 'body')

export const Caption = withContext<'caption', PolymorphicProps>(ark.caption, 'caption')

export const Cell = withContext<'td', PolymorphicProps>(ark.td, 'cell')

export const Foot = withContext<'tfoot', PolymorphicProps>(ark.tfoot, 'footer')

export const Head = withContext<'thead', PolymorphicProps>(ark.thead, 'head')

export const Header = withContext<'th', PolymorphicProps>(ark.th, 'header')

export const Row = withContext<'tr', PolymorphicProps>(ark.tr, 'row')
