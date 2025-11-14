import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSegmentGroupContext } from './use-segment-group-context'

export const SegmentGroupLabelElement = 'label' as const
export interface SegmentGroupLabelProps
  extends ComponentProps<typeof SegmentGroupLabelElement>,
    PolymorphicProps {}

export const SegmentGroupLabel = (props: SegmentGroupLabelProps) => {
  const { ref, ...restProps } = props
  const segmentGroup = useSegmentGroupContext()
  const mergedProps = mergeProps(segmentGroup.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
