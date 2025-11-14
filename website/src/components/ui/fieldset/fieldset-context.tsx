import { type UseFieldsetContext, useFieldsetContext } from '@ousia-ui/ark/utils'
import type { ReactNode } from 'react'

export interface FieldsetContextProps {
  children: (context: UseFieldsetContext) => ReactNode
}

export const FieldsetContext = (props: FieldsetContextProps) => props.children(useFieldsetContext())
