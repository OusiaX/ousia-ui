import { createContext } from '@ousia-ui/ark/utils'
import type { UseClipboardReturn } from './use-clipboard'

export interface UseClipboardContext extends UseClipboardReturn {}

export const [ClipboardProvider, useClipboardContext] = createContext<UseClipboardContext>({
  name: 'ClipboardContext',
  hookName: 'useClipboardContext',
  providerName: '<ClipboardProvider />',
})
