import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useComboboxContext } from './use-combobox-context'
import { useComboboxItemGroupPropsContext } from './use-combobox-item-group-props-context'

export const ComboboxItemGroupLabelElement = 'div' as const
export interface ComboboxItemGroupLabelProps
  extends ComponentProps<typeof ComboboxItemGroupLabelElement>,
    PolymorphicProps {}

export const ComboboxItemGroupLabel = (props: ComboboxItemGroupLabelProps) => {
  const { ref, ...restProps } = props
  const combobox = useComboboxContext()
  const itemGroupProps = useComboboxItemGroupPropsContext()
  const mergedProps = mergeProps(
    combobox.getItemGroupLabelProps({ htmlFor: itemGroupProps.id }),
    restProps,
  )

  return <ark.div {...mergedProps} ref={ref} />
}
