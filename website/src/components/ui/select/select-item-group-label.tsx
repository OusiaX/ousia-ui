import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'
import { useSelectItemGroupPropsContext } from './use-select-item-group-props'

export const SelectItemGroupLabelElement = 'div' as const
export interface SelectItemGroupLabelProps
  extends ComponentProps<typeof SelectItemGroupLabelElement>,
    PolymorphicProps {}

export const SelectItemGroupLabel = (props: SelectItemGroupLabelProps) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const itemGroupProps = useSelectItemGroupPropsContext()
  const mergedProps = mergeProps(
    select.getItemGroupLabelProps({ htmlFor: itemGroupProps.id }),
    restProps,
  )

  return <ark.div {...mergedProps} ref={ref} />
}
