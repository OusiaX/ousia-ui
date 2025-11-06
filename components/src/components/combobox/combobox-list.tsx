import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useComboboxContext } from './use-combobox-context'

export const ComboboxListElement = 'div' as const
export interface ComboboxListProps
  extends ComponentProps<typeof ComboboxListElement>,
    PolymorphicProps {}

export const ComboboxList = (props: ComboboxListProps) => {
  const { ref, ...restProps } = props
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(combobox.getListProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
