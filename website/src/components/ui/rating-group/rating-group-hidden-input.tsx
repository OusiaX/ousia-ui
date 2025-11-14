import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useRatingGroupContext } from './use-rating-group-context'

export const RatingGroupHiddenInputElement = 'input' as const
export interface RatingGroupHiddenInputProps
  extends ComponentProps<typeof RatingGroupHiddenInputElement>,
    PolymorphicProps {}

export const RatingGroupHiddenInput = (props: RatingGroupHiddenInputProps) => {
  const { ref, ...restProps } = props
  const ratingGroup = useRatingGroupContext()
  const mergedProps = mergeProps(ratingGroup.getHiddenInputProps(), restProps)
  const field = useFieldContext()

  return <ark.input aria-describedby={field?.ariaDescribedby} {...mergedProps} ref={ref} />
}
