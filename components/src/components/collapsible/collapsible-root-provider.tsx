import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import { createSplitProps, CollapsibleProvider, type UseCollapsibleReturn } from '@ousia-ui/ark/utils'

interface RootProviderProps {
  value: UseCollapsibleReturn
}

export interface CollapsibleRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface CollapsibleRootProviderProps extends HTMLProps<'div'>, CollapsibleRootProviderBaseProps {}

export const CollapsibleRootProvider = forwardRef<HTMLDivElement, CollapsibleRootProviderProps>((props, ref) => {
  const [{ value: collapsible }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(collapsible.getRootProps(), localProps)

  return (
    <CollapsibleProvider value={collapsible}>
      <arkMemo.div {...mergedProps} ref={ref} />
    </CollapsibleProvider>
  )
})

CollapsibleRootProvider.displayName = 'CollapsibleRootProvider'
