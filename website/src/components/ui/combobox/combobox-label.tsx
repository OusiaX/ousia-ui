import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useComboboxContext } from './use-combobox-context'

export const ComboboxLabelElement = 'label' as const
export interface ComboboxLabelProps
  extends ComponentProps<typeof ComboboxLabelElement>,
    PolymorphicProps {}

export const ComboboxLabel = (props: ComboboxLabelProps) => {
  const { ref, ...restProps } = props
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(combobox.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
