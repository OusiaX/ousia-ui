import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useRatingGroupContext } from './use-rating-group-context'

export interface RatingGroupLabelBaseProps extends PolymorphicProps {}
export interface RatingGroupLabelProps extends ComponentProps<'label'>, RatingGroupLabelBaseProps {}

export const RatingGroupLabel = (props: RatingGroupLabelProps) => {
  const { ref, ...restProps } = props
  const ratingGroup = useRatingGroupContext()
  const mergedProps = mergeProps(ratingGroup.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
