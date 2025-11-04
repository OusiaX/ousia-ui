import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSegmentGroupContext } from './use-segment-group-context'
import { useSegmentGroupItemPropsContext } from './use-segment-group-item-props-context'

export interface SegmentGroupItemControlProps extends ComponentProps<'div'>, PolymorphicProps {}

export const SegmentGroupItemControl = (props: SegmentGroupItemControlProps) => {
  const { ref, ...restProps } = props
  const segmentGroup = useSegmentGroupContext()
  const itemProps = useSegmentGroupItemPropsContext()
  const mergedProps = mergeProps(segmentGroup.getItemControlProps(itemProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
