import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useComboboxContext } from './use-combobox-context'

export const ComboboxControlElement = 'div' as const
export interface ComboboxControlProps
  extends ComponentProps<typeof ComboboxControlElement>,
    PolymorphicProps {}

export const ComboboxControl = (props: ComboboxControlProps) => {
  const { ref, ...restProps } = props
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(combobox.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
