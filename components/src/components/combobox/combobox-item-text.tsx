import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useComboboxContext } from './use-combobox-context'
import { useComboboxItemPropsContext } from './use-combobox-item-props-context'

export interface ComboboxItemTextBaseProps extends PolymorphicProps {}
export interface ComboboxItemTextProps extends ComponentProps<'span'>, ComboboxItemTextBaseProps {}

export const ComboboxItemText = (props: ComboboxItemTextProps) => {
  const { ref, ...restProps } = props
  const combobox = useComboboxContext()
  const itemProps = useComboboxItemPropsContext()
  const mergedProps = mergeProps(combobox.getItemTextProps(itemProps), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
