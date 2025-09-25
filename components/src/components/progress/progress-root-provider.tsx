import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import type { UseProgressReturn } from './use-progress'
import { ProgressProvider } from './use-progress-context'

interface RootProviderProps {
  value: UseProgressReturn
}

export interface ProgressRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface ProgressRootProviderProps extends HTMLProps<'div'>, ProgressRootProviderBaseProps {}

export const ProgressRootProvider = forwardRef<HTMLDivElement, ProgressRootProviderProps>((props, ref) => {
  const [{ value: progress }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(progress.getRootProps(), localProps)

  return (
    <ProgressProvider value={progress}>
      <arkMemo.div {...mergedProps} ref={ref} />
    </ProgressProvider>
  )
})

ProgressRootProvider.displayName = 'ProgressRootProvider'
