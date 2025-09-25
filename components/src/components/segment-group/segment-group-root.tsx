import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import type { Assign } from '@ousia-ui/ark'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type UseSegmentGroupProps, useSegmentGroup } from './use-segment-group'
import { SegmentGroupProvider } from './use-segment-group-context'

export interface SegmentGroupRootBaseProps extends UseSegmentGroupProps, PolymorphicProps {}
export interface SegmentGroupRootProps extends Assign<HTMLProps<'div'>, SegmentGroupRootBaseProps> {}

export const SegmentGroupRoot = forwardRef<HTMLDivElement, SegmentGroupRootProps>((props, ref) => {
  const [useSegmentGroupProps, localProps] = createSplitProps<UseSegmentGroupProps>()(props, [
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
      <arkMemo.div {...mergedProps} ref={ref} />
    </SegmentGroupProvider>
  )
})

SegmentGroupRoot.displayName = 'SegmentGroupRoot'
