import { mergeProps } from '@zag-js/react'
import type { PanelProps } from '@zag-js/splitter'
import { forwardRef } from 'react'
import type { Assign } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkSimple } from '@ousia-ui/ark'
import { useSplitterContext } from './use-splitter-context'

export interface SplitterPanelBaseProps extends PanelProps, PolymorphicProps {}
export interface SplitterPanelProps extends Assign<HTMLProps<'div'>, SplitterPanelBaseProps> {}

export const SplitterPanel = forwardRef<HTMLDivElement, SplitterPanelProps>((props, ref) => {
  const [splitterPanelProps, localProps] = createSplitProps<PanelProps>()(props, ['id'])
  const splitter = useSplitterContext()
  const mergedProps = mergeProps(splitter.getPanelProps(splitterPanelProps), localProps)

  return <arkSimple.div {...mergedProps} ref={ref} />
})

SplitterPanel.displayName = 'SplitterPanel'
