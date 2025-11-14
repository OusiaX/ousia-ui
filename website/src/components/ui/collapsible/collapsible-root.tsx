import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { CollapsibleProvider, type UseCollapsibleProps, useCollapsible } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { splitCollapsibleProps } from './split-collapsible-props'

export const CollapsibleRootElement = 'div' as const
export type CollapsibleRootProps = Assigns<
  ComponentProps<typeof CollapsibleRootElement>,
  UseCollapsibleProps,
  PolymorphicProps
>

export const CollapsibleRoot = (props: CollapsibleRootProps) => {
  const { ref, ...restProps } = props
  const [useCollapsibleProps, localProps] = splitCollapsibleProps(restProps)
  const collapsible = useCollapsible(useCollapsibleProps)
  const mergedProps = mergeProps(collapsible.getRootProps(), localProps)

  return (
    <CollapsibleProvider value={collapsible}>
      <ark.div {...mergedProps} ref={ref} />
    </CollapsibleProvider>
  )
}
