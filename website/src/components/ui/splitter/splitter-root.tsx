import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseSplitterProps, useSplitter } from './use-splitter'
import { SplitterProvider } from './use-splitter-context'

export const SplitterRootElement = 'div' as const
export type SplitterRootProps = Assigns<
  ComponentProps<typeof SplitterRootElement>,
  UseSplitterProps,
  PolymorphicProps
>

export const SplitterRoot = (props: SplitterRootProps) => {
  const { ref, ...restProps } = props
  const [useSplitterProps, localProps] = createSplitProps<UseSplitterProps>()(restProps, [
    'defaultSize',
    'id',
    'ids',
    'keyboardResizeBy',
    'nonce',
    'onCollapse',
    'onExpand',
    'onResize',
    'onResizeEnd',
    'onResizeStart',
    'orientation',
    'panels',
    'size',
  ])
  const splitter = useSplitter(useSplitterProps)
  const mergedProps = mergeProps(splitter.getRootProps(), localProps)

  return (
    <SplitterProvider value={splitter}>
      <ark.div {...mergedProps} ref={ref} />
    </SplitterProvider>
  )
}
