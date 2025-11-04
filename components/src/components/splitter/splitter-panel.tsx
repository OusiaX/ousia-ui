import { type Assign, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { PanelProps } from '@zag-js/splitter'
import type { ComponentProps } from 'react'
import { useSplitterContext } from './use-splitter-context'

export interface SplitterPanelBaseProps extends PanelProps, PolymorphicProps {}
export interface SplitterPanelProps extends Assign<ComponentProps<'div'>, SplitterPanelBaseProps> {}

export const SplitterPanel = (props: SplitterPanelProps) => {
  const { ref, ...restProps } = props
  const [splitterPanelProps, localProps] = createSplitProps<PanelProps>()(restProps, ['id'])
  const splitter = useSplitterContext()
  const mergedProps = mergeProps(splitter.getPanelProps(splitterPanelProps), localProps)

  return <ark.div {...mergedProps} ref={ref} />
}
