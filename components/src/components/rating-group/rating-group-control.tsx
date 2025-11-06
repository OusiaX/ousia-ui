import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useRatingGroupContext } from './use-rating-group-context'

export const RatingGroupControlElement = 'div' as const
export interface RatingGroupControlProps
  extends ComponentProps<typeof RatingGroupControlElement>,
    PolymorphicProps {}

export const RatingGroupControl = (props: RatingGroupControlProps) => {
  const { ref, ...restProps } = props
  const ratingGroup = useRatingGroupContext()
  const mergedProps = mergeProps(ratingGroup.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
