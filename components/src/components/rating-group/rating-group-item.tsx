import type { ItemProps } from '@zag-js/rating-group'
import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import { useRatingGroupContext } from './use-rating-group-context'
import { RatingGroupItemProvider } from './use-rating-group-item-context'

export interface RatingGroupItemBaseProps extends ItemProps, PolymorphicProps {}
export interface RatingGroupItemProps extends HTMLProps<'span'>, RatingGroupItemBaseProps {}

export const RatingGroupItem = forwardRef<HTMLSpanElement, RatingGroupItemProps>((props, ref) => {
  const [itemProps, localProps] = createSplitProps<ItemProps>()(props, ['index'])
  const ratingGroup = useRatingGroupContext()
  const mergedProps = mergeProps(ratingGroup.getItemProps(itemProps), localProps)
  const itemState = ratingGroup.getItemState(itemProps)

  return (
    <RatingGroupItemProvider value={itemState}>
      <arkMemo.span {...mergedProps} ref={ref} />
    </RatingGroupItemProvider>
  )
})

RatingGroupItem.displayName = 'RatingGroupItem'
