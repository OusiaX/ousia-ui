import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useSwitchContext } from './use-switch-context'

export const SwitchHiddenInputElement = 'input' as const
export interface SwitchHiddenInputProps
  extends ComponentProps<typeof SwitchHiddenInputElement>,
    PolymorphicProps {}

export const SwitchHiddenInput = (props: SwitchHiddenInputProps) => {
  const { ref, ...restProps } = props
  const switchContext = useSwitchContext()
  const mergedProps = mergeProps(switchContext.getHiddenInputProps(), restProps)
  const field = useFieldContext()

  return <ark.input aria-describedby={field?.ariaDescribedby} {...mergedProps} ref={ref} />
}
