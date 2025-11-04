import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useComboboxContext } from './use-combobox-context'
import { useComboboxItemPropsContext } from './use-combobox-item-props-context'

export interface ComboboxItemIndicatorBaseProps extends PolymorphicProps {}
export interface ComboboxItemIndicatorProps
  extends ComponentProps<'div'>,
    ComboboxItemIndicatorBaseProps {}

export const ComboboxItemIndicator = (props: ComboboxItemIndicatorProps) => {
  const { ref, ...restProps } = props
  const combobox = useComboboxContext()
  const itemProps = useComboboxItemPropsContext()
  const mergedProps = mergeProps(combobox.getItemIndicatorProps(itemProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
