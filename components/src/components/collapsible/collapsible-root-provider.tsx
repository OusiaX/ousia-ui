import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  CollapsibleProvider,
  type UseCollapsibleReturn,
  createSplitProps,
} from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

interface RootProviderProps {
  value: UseCollapsibleReturn
}

export interface CollapsibleRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface CollapsibleRootProviderProps
  extends ComponentProps<'div'>,
    CollapsibleRootProviderBaseProps {}

export const CollapsibleRootProvider = (props: CollapsibleRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: collapsible }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(collapsible.getRootProps(), localProps)

  return (
    <CollapsibleProvider value={collapsible}>
      <ark.div {...mergedProps} ref={ref} />
    </CollapsibleProvider>
  )
}
