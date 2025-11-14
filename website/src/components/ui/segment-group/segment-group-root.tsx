import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseSegmentGroupProps, useSegmentGroup } from './use-segment-group'
import { SegmentGroupProvider } from './use-segment-group-context'

export const SegmentGroupRootElement = 'div' as const
export type SegmentGroupRootProps = Assigns<
  ComponentProps<typeof SegmentGroupRootElement>,
  UseSegmentGroupProps,
  PolymorphicProps
>

export const SegmentGroupRoot = (props: SegmentGroupRootProps) => {
  const { ref, ...restProps } = props
  const [useSegmentGroupProps, localProps] = createSplitProps<UseSegmentGroupProps>()(restProps, [
    'defaultValue',
    'disabled',
    'form',
    'id',
    'ids',
    'name',
    'onValueChange',
    'orientation',
    'readOnly',
    'value',
  ])
  const segmentGroup = useSegmentGroup(useSegmentGroupProps)
  const mergedProps = mergeProps(segmentGroup.getRootProps(), localProps)

  return (
    <SegmentGroupProvider value={segmentGroup}>
      <ark.div {...mergedProps} ref={ref} />
    </SegmentGroupProvider>
  )
}
