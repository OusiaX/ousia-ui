import { type Assign, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/toggle-group'
import type { ComponentProps } from 'react'
import { useToggleGroupContext } from './use-toggle-group-context'

export interface ToggleGroupItemBaseProps extends ItemProps, PolymorphicProps {}
export interface ToggleGroupItemProps
  extends Assign<ComponentProps<'button'>, ToggleGroupItemBaseProps> {}

export const ToggleGroupItem = (props: ToggleGroupItemProps) => {
  const { ref, ...restProps } = props
  const [itemProps, localProps] = createSplitProps<ItemProps>()(restProps, ['value', 'disabled'])
  const toggleGroup = useToggleGroupContext()
  const mergedProps = mergeProps(toggleGroup.getItemProps(itemProps), localProps)

  return <ark.button {...mergedProps} ref={ref} />
}
