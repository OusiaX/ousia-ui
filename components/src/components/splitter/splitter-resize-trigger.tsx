import { type Assign, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ResizeTriggerProps } from '@zag-js/splitter'
import type { ComponentProps } from 'react'
import { useSplitterContext } from './use-splitter-context'

export interface SplitterResizeTriggerBaseProps extends ResizeTriggerProps, PolymorphicProps {}
export interface SplitterResizeTriggerProps
  extends Assign<ComponentProps<'button'>, SplitterResizeTriggerBaseProps> {}

export const SplitterResizeTrigger = (props: SplitterResizeTriggerProps) => {
  const { ref, ...restProps } = props
  const [triggerProps, localProps] = createSplitProps<ResizeTriggerProps>()(restProps, [
    'disabled',
    'id',
  ])
  const splitter = useSplitterContext()
  const mergedProps = mergeProps(splitter.getResizeTriggerProps(triggerProps), localProps)

  return <ark.button ref={ref} {...mergedProps} />
}
