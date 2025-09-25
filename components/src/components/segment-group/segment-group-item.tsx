import type { ItemProps } from '@zag-js/radio-group'
import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { useSegmentGroupContext } from './use-segment-group-context'
import { SegmentGroupItemProvider } from './use-segment-group-item-context'
import { SegmentGroupItemPropsProvider } from './use-segment-group-item-props-context'

export interface SegmentGroupItemBaseProps extends ItemProps, PolymorphicProps {}
export interface SegmentGroupItemProps extends HTMLProps<'label'>, SegmentGroupItemBaseProps {}

export const SegmentGroupItem = forwardRef<HTMLLabelElement, SegmentGroupItemProps>((props, ref) => {
  const [itemProps, localProps] = createSplitProps<ItemProps>()(props, ['value', 'disabled', 'invalid'])
  const segmentGroup = useSegmentGroupContext()
  const mergedProps = mergeProps(
    segmentGroup.getItemProps(itemProps),
    localProps,
  )
  const itemState = segmentGroup.getItemState(itemProps)

  return (
    <SegmentGroupItemPropsProvider value={itemProps}>
      <SegmentGroupItemProvider value={itemState}>
        <arkMemo.label {...mergedProps} ref={ref} />
      </SegmentGroupItemProvider>
    </SegmentGroupItemPropsProvider>
  )
})

SegmentGroupItem.displayName = 'SegmentGroupItem'
