import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSwitchContext } from './use-switch-context'

export interface SwitchLabelProps extends ComponentProps<'span'>, PolymorphicProps {}

export const SwitchLabel = (props: SwitchLabelProps) => {
  const { ref, ...restProps } = props
  const switchContext = useSwitchContext()
  const mergedProps = mergeProps(switchContext.getLabelProps(), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
