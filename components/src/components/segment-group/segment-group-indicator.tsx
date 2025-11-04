import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSegmentGroupContext } from './use-segment-group-context'

export interface SegmentGroupIndicatorProps extends ComponentProps<'div'>, PolymorphicProps {}

export const SegmentGroupIndicator = (props: SegmentGroupIndicatorProps) => {
  const { ref, ...restProps } = props
  const segmentGroup = useSegmentGroupContext()
  const mergedProps = mergeProps(segmentGroup.getIndicatorProps(), restProps)
  return <ark.div {...mergedProps} ref={ref} />
}
