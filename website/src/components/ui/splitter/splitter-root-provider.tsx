import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseSplitterReturn } from './use-splitter'
import { SplitterProvider } from './use-splitter-context'

interface RootProviderProps {
  value: UseSplitterReturn
}

export const SplitterRootProviderElement = 'div' as const
export interface SplitterRootProviderProps
  extends ComponentProps<typeof SplitterRootProviderElement>,
    RootProviderProps,
    PolymorphicProps {}

export const SplitterRootProvider = (props: SplitterRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: splitter }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(splitter.getRootProps(), localProps)

  return (
    <SplitterProvider value={splitter}>
      <ark.div {...mergedProps} ref={ref} />
    </SplitterProvider>
  )
}
