import type { Assign } from '@ousia-ui/ark'
import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/pagination'
import type { ComponentProps } from 'react'
import { usePaginationContext } from './use-pagination-context'

export interface PaginationItemBaseProps extends ItemProps, PolymorphicProps {}
export interface PaginationItemProps
  extends Assign<ComponentProps<'button'>, PaginationItemBaseProps> {}

export const PaginationItem = (props: PaginationItemProps) => {
  const { ref, ...restProps } = props
  const [itemProps, localProps] = createSplitProps<ItemProps>()(restProps, ['value', 'type'])
  const pagination = usePaginationContext()
  const mergedProps = mergeProps(pagination.getItemProps(itemProps), localProps)

  return <ark.button {...mergedProps} ref={ref} />
}
