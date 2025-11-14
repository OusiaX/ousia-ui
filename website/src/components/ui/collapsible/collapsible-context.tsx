import { type UseCollapsibleContext, useCollapsibleContext } from '@ousia-ui/ark/utils'
import type { ReactNode } from 'react'

export interface CollapsibleContextProps {
  children: (context: UseCollapsibleContext) => ReactNode
}

export const CollapsibleContext = (props: CollapsibleContextProps) =>
  props.children(useCollapsibleContext())
