import { mergeProps } from '@zag-js/react'
import type { ResizeTriggerProps } from '@zag-js/splitter'
import { forwardRef } from 'react'
import type { Assign } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { useSplitterContext } from './use-splitter-context'

export interface SplitterResizeTriggerBaseProps extends ResizeTriggerProps, PolymorphicProps {}
export interface SplitterResizeTriggerProps extends Assign<HTMLProps<'button'>, SplitterResizeTriggerBaseProps> {}

export const SplitterResizeTrigger = forwardRef<HTMLButtonElement, SplitterResizeTriggerProps>((props, ref) => {
  const [triggerProps, localProps] = createSplitProps<ResizeTriggerProps>()(props, ['disabled', 'id'])
  const splitter = useSplitterContext()
  const mergedProps = mergeProps(splitter.getResizeTriggerProps(triggerProps), localProps)

  return <ark.button ref={ref} {...mergedProps} />
})

SplitterResizeTrigger.displayName = 'SplitterResizeTrigger'
