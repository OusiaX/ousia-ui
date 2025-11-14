import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSegmentGroupContext } from './use-segment-group-context'
import { useSegmentGroupItemPropsContext } from './use-segment-group-item-props-context'

export const SegmentGroupItemTextElement = 'span' as const
export interface SegmentGroupItemTextProps
  extends ComponentProps<typeof SegmentGroupItemTextElement>,
    PolymorphicProps {}

export const SegmentGroupItemText = (props: SegmentGroupItemTextProps) => {
  const { ref, ...restProps } = props
  const segmentGroup = useSegmentGroupContext()
  const itemProps = useSegmentGroupItemPropsContext()
  const mergedProps = mergeProps(segmentGroup.getItemTextProps(itemProps), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
