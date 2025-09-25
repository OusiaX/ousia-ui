import type { ReactNode } from 'react'
import type { UseFieldContext } from '@ousia-ui/ark/utils'
import { useFieldContext } from '@ousia-ui/ark/utils'

export interface FieldContextProps {
  children: (context: UseFieldContext) => ReactNode
}

export const FieldContext = (props: FieldContextProps) => props.children(useFieldContext())
