import { createContext } from '@ousia-ui/ark/utils'
import type { UseEditableReturn } from './use-editable'

export interface UseEditableContext extends UseEditableReturn {}

export const [EditableProvider, useEditableContext] = createContext<UseEditableContext>({
  name: 'EditableContext',
  hookName: 'useEditableContext',
  providerName: '<EditableProvider />',
})
