import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'
import { useSelectItemPropsContext } from './use-select-item-props-context'

export interface SelectItemTextProps extends ComponentProps<'span'>, PolymorphicProps {}

export const SelectItemText = (props: SelectItemTextProps) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const itemProps = useSelectItemPropsContext()
  const mergedProps = mergeProps(select.getItemTextProps(itemProps), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
