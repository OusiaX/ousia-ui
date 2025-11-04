import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useComboboxContext } from './use-combobox-context'

export interface ComboboxLabelProps extends ComponentProps<'label'>, PolymorphicProps {}

export const ComboboxLabel = (props: ComboboxLabelProps) => {
  const { ref, ...restProps } = props
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(combobox.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
