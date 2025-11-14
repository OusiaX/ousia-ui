import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseRatingGroupProps, useRatingGroup } from './use-rating-group'
import { RatingGroupProvider } from './use-rating-group-context'

export const RatingGroupRootElement = 'div' as const
export type RatingGroupRootProps = Assigns<
  ComponentProps<typeof RatingGroupRootElement>,
  UseRatingGroupProps,
  PolymorphicProps
>

export const RatingGroupRoot = (props: RatingGroupRootProps) => {
  const { ref, ...restProps } = props
  const [useRatingProps, localProps] = createSplitProps<UseRatingGroupProps>()(restProps, [
    'allowHalf',
    'autoFocus',
    'count',
    'defaultValue',
    'disabled',
    'form',
    'id',
    'ids',
    'name',
    'onHoverChange',
    'onValueChange',
    'readOnly',
    'required',
    'translations',
    'value',
  ])

  const ratingGroup = useRatingGroup(useRatingProps)
  const mergedProps = mergeProps(ratingGroup.getRootProps(), localProps)

  return (
    <RatingGroupProvider value={ratingGroup}>
      <ark.div {...mergedProps} ref={ref} />
    </RatingGroupProvider>
  )
}
