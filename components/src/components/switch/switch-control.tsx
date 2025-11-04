import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSwitchContext } from './use-switch-context'

export interface SwitchControlBaseProps extends PolymorphicProps {}
export interface SwitchControlProps extends ComponentProps<'span'>, SwitchControlBaseProps {}

export const SwitchControl = (props: SwitchControlProps) => {
  const { ref, ...restProps } = props
  const switchContext = useSwitchContext()
  const mergedProps = mergeProps(switchContext.getControlProps(), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
