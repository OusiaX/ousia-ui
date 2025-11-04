import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/radio-group'
import type { ComponentProps } from 'react'
import { useSegmentGroupContext } from './use-segment-group-context'
import { SegmentGroupItemProvider } from './use-segment-group-item-context'
import { SegmentGroupItemPropsProvider } from './use-segment-group-item-props-context'

export interface SegmentGroupItemBaseProps extends ItemProps, PolymorphicProps {}
export interface SegmentGroupItemProps extends ComponentProps<'label'>, SegmentGroupItemBaseProps {}

export const SegmentGroupItem = (props: SegmentGroupItemProps) => {
  const { ref, ...restProps } = props
  const [itemProps, localProps] = createSplitProps<ItemProps>()(restProps, [
    'value',
    'disabled',
    'invalid',
  ])
  const segmentGroup = useSegmentGroupContext()
  const mergedProps = mergeProps(segmentGroup.getItemProps(itemProps), localProps)
  const itemState = segmentGroup.getItemState(itemProps)

  return (
    <SegmentGroupItemPropsProvider value={itemProps}>
      <SegmentGroupItemProvider value={itemState}>
        <ark.label {...mergedProps} ref={ref} />
      </SegmentGroupItemProvider>
    </SegmentGroupItemPropsProvider>
  )
}
