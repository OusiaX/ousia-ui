import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseProgressReturn } from './use-progress'
import { ProgressProvider } from './use-progress-context'

interface RootProviderProps {
  value: UseProgressReturn
}

export interface ProgressRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface ProgressRootProviderProps
  extends ComponentProps<'div'>,
    ProgressRootProviderBaseProps {}

export const ProgressRootProvider = (props: ProgressRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: progress }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(progress.getRootProps(), localProps)

  return (
    <ProgressProvider value={progress}>
      <ark.div {...mergedProps} ref={ref} />
    </ProgressProvider>
  )
}
