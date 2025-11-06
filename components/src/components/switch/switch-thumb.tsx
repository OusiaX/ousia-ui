import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSwitchContext } from './use-switch-context'

export const SwitchThumbElement = 'span' as const
export interface SwitchThumbProps
  extends ComponentProps<typeof SwitchThumbElement>,
    PolymorphicProps {}

export const SwitchThumb = (props: SwitchThumbProps) => {
  const { ref, ...restProps } = props
  const switchContext = useSwitchContext()
  const mergedProps = mergeProps(switchContext.getThumbProps(), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
