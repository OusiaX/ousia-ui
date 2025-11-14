import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseProgressProps, useProgress } from './use-progress'
import { ProgressProvider } from './use-progress-context'

export const ProgressRootElement = 'div' as const
export type ProgressRootProps = Assigns<
  ComponentProps<typeof ProgressRootElement>,
  UseProgressProps,
  PolymorphicProps
>

export const ProgressRoot = (props: ProgressRootProps) => {
  const { ref, ...restProps } = props
  const [progressProps, localProps] = createSplitProps<UseProgressProps>()(restProps, [
    'defaultValue',
    'formatOptions',
    'id',
    'ids',
    'locale',
    'max',
    'min',
    'onValueChange',
    'orientation',
    'translations',
    'value',
  ])
  const progress = useProgress(progressProps)
  const mergedProps = mergeProps(progress.getRootProps(), localProps)

  return (
    <ProgressProvider value={progress}>
      <ark.div {...mergedProps} ref={ref} />
    </ProgressProvider>
  )
}
