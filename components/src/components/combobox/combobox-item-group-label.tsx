import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import type { HTMLProps } from '@ousia-ui/ark'
import { arkSimple } from '@ousia-ui/ark'
import { useComboboxContext } from './use-combobox-context'
import { useComboboxItemGroupPropsContext } from './use-combobox-item-group-props-context'

export interface ComboboxItemGroupLabelBaseProps {}
export interface ComboboxItemGroupLabelProps extends HTMLProps<'div'>, ComboboxItemGroupLabelBaseProps {}

export const ComboboxItemGroupLabel = forwardRef<HTMLDivElement, ComboboxItemGroupLabelProps>((props, ref) => {
  const combobox = useComboboxContext()
  const itemGroupProps = useComboboxItemGroupPropsContext()
  const mergedProps = mergeProps(combobox.getItemGroupLabelProps({ htmlFor: itemGroupProps.id }), props)

  return <arkSimple.div {...mergedProps} ref={ref} />
})

ComboboxItemGroupLabel.displayName = 'ComboboxItemGroupLabel'
