import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useComboboxContext } from './use-combobox-context'

export const ComboboxClearTriggerElement = 'button' as const
export interface ComboboxClearTriggerProps
  extends ComponentProps<typeof ComboboxClearTriggerElement>,
    PolymorphicProps {}

export const ComboboxClearTrigger = (props: ComboboxClearTriggerProps) => {
  const { ref, ...restProps } = props
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(combobox.getClearTriggerProps(), restProps)

  return <ark.button {...mergedProps} ref={ref} />
}
