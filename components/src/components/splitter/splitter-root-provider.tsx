import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkSimple } from '@ousia-ui/ark'
import type { UseSplitterReturn } from './use-splitter'
import { SplitterProvider } from './use-splitter-context'

interface RootProviderProps {
  value: UseSplitterReturn
}

export interface SplitterRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface SplitterRootProviderProps extends HTMLProps<'div'>, SplitterRootProviderBaseProps {}

export const SplitterRootProvider = forwardRef<HTMLDivElement, SplitterRootProviderProps>((props, ref) => {
  const [{ value: splitter }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(splitter.getRootProps(), localProps)

  return (
    <SplitterProvider value={splitter}>
      <arkSimple.div {...mergedProps} ref={ref} />
    </SplitterProvider>
  )
})

SplitterRootProvider.displayName = 'SplitterRootProvider'
