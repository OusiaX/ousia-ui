import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import type { HTMLProps } from '@ousia-ui/ark'
import { arkSimple } from '@ousia-ui/ark'
import { useComboboxContext } from './use-combobox-context'

export interface ComboboxClearTriggerBaseProps {}
export interface ComboboxClearTriggerProps extends HTMLProps<'button'>, ComboboxClearTriggerBaseProps {}

export const ComboboxClearTrigger = forwardRef<HTMLButtonElement, ComboboxClearTriggerProps>((props, ref) => {
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(combobox.getClearTriggerProps(), props)

  return <arkSimple.button {...mergedProps} ref={ref} />
})

ComboboxClearTrigger.displayName = 'ComboboxClearTrigger'
