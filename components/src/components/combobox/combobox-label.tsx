import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import type { HTMLProps } from '@ousia-ui/ark'
import { arkSimple } from '@ousia-ui/ark'
import { useComboboxContext } from './use-combobox-context'

export interface ComboboxLabelBaseProps {}
export interface ComboboxLabelProps extends HTMLProps<'label'>, ComboboxLabelBaseProps {}

export const ComboboxLabel = forwardRef<HTMLLabelElement, ComboboxLabelProps>((props, ref) => {
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(combobox.getLabelProps(), props)

  return <arkSimple.label {...mergedProps} ref={ref} />
})

ComboboxLabel.displayName = 'ComboboxLabel'
