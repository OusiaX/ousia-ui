import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/rating-group'
import type { ComponentProps } from 'react'
import { useRatingGroupContext } from './use-rating-group-context'
import { RatingGroupItemProvider } from './use-rating-group-item-context'

export interface RatingGroupItemBaseProps extends ItemProps, PolymorphicProps {}
export interface RatingGroupItemProps extends ComponentProps<'span'>, RatingGroupItemBaseProps {}

export const RatingGroupItem = (props: RatingGroupItemProps) => {
  const { ref, ...restProps } = props
  const [itemProps, localProps] = createSplitProps<ItemProps>()(restProps, ['index'])
  const ratingGroup = useRatingGroupContext()
  const mergedProps = mergeProps(ratingGroup.getItemProps(itemProps), localProps)
  const itemState = ratingGroup.getItemState(itemProps)

  return (
    <RatingGroupItemProvider value={itemState}>
      <ark.span {...mergedProps} ref={ref} />
    </RatingGroupItemProvider>
  )
}
