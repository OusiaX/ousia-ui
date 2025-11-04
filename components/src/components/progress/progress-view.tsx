import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ViewProps } from '@zag-js/progress'
import type { ComponentProps } from 'react'
import { useProgressContext } from './use-progress-context'

export interface ProgressViewBaseProps extends ViewProps, PolymorphicProps {}
export interface ProgressViewProps extends ComponentProps<'span'>, ProgressViewBaseProps {}

export const ProgressView = (props: ProgressViewProps) => {
  const { ref, ...restProps } = props
  const [viewProps, localProps] = createSplitProps<ViewProps>()(restProps, ['state'])
  const progress = useProgressContext()
  const mergedProps = mergeProps(progress.getViewProps(viewProps), localProps)

  return <ark.span {...mergedProps} ref={ref} />
}
