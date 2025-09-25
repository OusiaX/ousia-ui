import type { ReactNode } from 'react'
import { useFieldsetContext, type UseFieldsetContext } from '@ousia-ui/ark/utils'

export interface FieldsetContextProps {
  children: (context: UseFieldsetContext) => ReactNode
}

export const FieldsetContext = (props: FieldsetContextProps) => props.children(useFieldsetContext())
