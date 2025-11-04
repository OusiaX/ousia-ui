import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'
import { useSelectItemPropsContext } from './use-select-item-props-context'

export interface SelectItemIndicatorProps extends ComponentProps<'div'>, PolymorphicProps {}

export const SelectItemIndicator = (props: SelectItemIndicatorProps) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const itemProps = useSelectItemPropsContext()
  const mergedProps = mergeProps(select.getItemIndicatorProps(itemProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
