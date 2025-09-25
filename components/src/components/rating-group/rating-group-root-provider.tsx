import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import type { UseRatingGroupReturn } from './use-rating-group'
import { RatingGroupProvider } from './use-rating-group-context'

interface RootProviderProps {
  value: UseRatingGroupReturn
}

export interface RatingGroupRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface RatingGroupRootProviderProps extends HTMLProps<'div'>, RatingGroupRootProviderBaseProps {}

export const RatingGroupRootProvider = forwardRef<HTMLDivElement, RatingGroupRootProviderProps>((props, ref) => {
  const [{ value: ratingGroup }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(ratingGroup.getRootProps(), localProps)

  return (
    <RatingGroupProvider value={ratingGroup}>
      <arkMemo.div {...mergedProps} ref={ref} />
    </RatingGroupProvider>
  )
})

RatingGroupRootProvider.displayName = 'RatingGroupRootProvider'
