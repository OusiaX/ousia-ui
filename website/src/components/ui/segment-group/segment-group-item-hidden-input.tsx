import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSegmentGroupContext } from './use-segment-group-context'
import { useSegmentGroupItemPropsContext } from './use-segment-group-item-props-context'

export interface SegmentGroupItemHiddenInputProps
  extends ComponentProps<'input'>,
    PolymorphicProps {}

export const SegmentGroupItemHiddenInput = (props: SegmentGroupItemHiddenInputProps) => {
  const { ref, ...restProps } = props
  const segmentGroup = useSegmentGroupContext()
  const itemProps = useSegmentGroupItemPropsContext()
  const mergedProps = mergeProps(segmentGroup.getItemHiddenInputProps(itemProps), restProps)

  return <ark.input {...mergedProps} ref={ref} />
}
