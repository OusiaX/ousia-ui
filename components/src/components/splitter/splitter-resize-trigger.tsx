import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ResizeTriggerProps } from '@zag-js/splitter'
import type { ComponentProps } from 'react'
import { useSplitterContext } from './use-splitter-context'

export const SplitterResizeTriggerElement = 'button' as const
export interface SplitterResizeTriggerProps
  extends Assigns<
    ComponentProps<typeof SplitterResizeTriggerElement>,
    ResizeTriggerProps,
    PolymorphicProps
  > {}

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
