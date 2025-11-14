import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseSegmentGroupReturn } from './use-segment-group'
import { SegmentGroupProvider } from './use-segment-group-context'

interface RootProviderProps {
  value: UseSegmentGroupReturn
}

export const SegmentGroupRootProviderElement = 'div' as const
export interface SegmentGroupRootProviderProps
  extends ComponentProps<typeof SegmentGroupRootProviderElement>,
    RootProviderProps,
    PolymorphicProps {}

export const SegmentGroupRootProvider = (props: SegmentGroupRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: segmentGroup }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(segmentGroup.getRootProps(), localProps)

  return (
    <SegmentGroupProvider value={segmentGroup}>
      <ark.div {...mergedProps} ref={ref} />
    </SegmentGroupProvider>
  )
}
