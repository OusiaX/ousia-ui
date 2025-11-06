import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseRatingGroupReturn } from './use-rating-group'
import { RatingGroupProvider } from './use-rating-group-context'

interface RootProviderProps {
  value: UseRatingGroupReturn
}

export const RatingGroupRootProviderElement = 'div' as const
export interface RatingGroupRootProviderProps
  extends ComponentProps<typeof RatingGroupRootProviderElement>,
    RootProviderProps,
    PolymorphicProps {}

export const RatingGroupRootProvider = (props: RatingGroupRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: ratingGroup }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(ratingGroup.getRootProps(), localProps)

  return (
    <RatingGroupProvider value={ratingGroup}>
      <ark.div {...mergedProps} ref={ref} />
    </RatingGroupProvider>
  )
}
