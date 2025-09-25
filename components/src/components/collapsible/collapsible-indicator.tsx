import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { useCollapsibleContext } from '@ousia-ui/ark/utils'

export interface CollapsibleIndicatorBaseProps extends PolymorphicProps {}
export interface CollapsibleIndicatorProps extends HTMLProps<'div'>, CollapsibleIndicatorBaseProps {}

export const CollapsibleIndicator = forwardRef<HTMLDivElement, CollapsibleIndicatorProps>((props, ref) => {
  const collapsible = useCollapsibleContext()
  const mergedProps = mergeProps(collapsible.getIndicatorProps(), props)

  return <ark.div {...mergedProps} ref={ref} />
})

CollapsibleIndicator.displayName = 'CollapsibleIndicator'
