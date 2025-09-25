'use client'
import { type Assign, ark, arkMemo, type PolymorphicProps } from '@ousia-ui/ark'
import { type TableVariantProps, table } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'

const { withProvider, withContext } = createStyleContext(table)

export interface RootProps
  extends Assign<HTMLStyledProps<'table'>, PolymorphicProps>,
    TableVariantProps {}
export const Root = withProvider<HTMLTableElement, RootProps>(arkMemo.table, 'root')

export const Body = withContext<
  HTMLTableSectionElement,
  Assign<HTMLStyledProps<'tbody'>, PolymorphicProps>
>(ark.tbody, 'body')

export const Caption = withContext<
  HTMLTableCaptionElement,
  Assign<HTMLStyledProps<'caption'>, PolymorphicProps>
>(ark.caption, 'caption')

export const Cell = withContext<
  HTMLTableCellElement,
  Assign<HTMLStyledProps<'td'>, PolymorphicProps>
>(arkMemo.td, 'cell')

export const Foot = withContext<
  HTMLTableSectionElement,
  Assign<HTMLStyledProps<'tfoot'>, PolymorphicProps>
>(ark.tfoot, 'footer')

export const Head = withContext<
  HTMLTableSectionElement,
  Assign<HTMLStyledProps<'head'>, PolymorphicProps>
>(ark.thead, 'head')

export const Header = withContext<
  HTMLTableCellElement,
  Assign<HTMLStyledProps<'th'>, PolymorphicProps>
>(arkMemo.th, 'header')

export const Row = withContext<
  HTMLTableRowElement,
  Assign<HTMLStyledProps<'tr'>, PolymorphicProps>
>(arkMemo.tr, 'row')
