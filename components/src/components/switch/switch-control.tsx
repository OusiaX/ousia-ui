import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSwitchContext } from './use-switch-context'

export const SwitchControlElement = 'span' as const
export interface SwitchControlProps
  extends ComponentProps<typeof SwitchControlElement>,
    PolymorphicProps {}

export const SwitchControl = (props: SwitchControlProps) => {
  const { ref, ...restProps } = props
  const switchContext = useSwitchContext()
  const mergedProps = mergeProps(switchContext.getControlProps(), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
