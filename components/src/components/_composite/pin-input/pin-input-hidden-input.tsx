import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { usePinInputContext } from './use-pin-input-context'

export interface PinInputHiddenInputProps extends ComponentProps<'input'>, PolymorphicProps {}

export const PinInputHiddenInput = (props: PinInputHiddenInputProps) => {
  const { ref, ...restProps } = props
  const pinInput = usePinInputContext()
  const mergedProps = mergeProps(pinInput.getHiddenInputProps(), restProps)
  const field = useFieldContext()

  return <ark.input aria-describedby={field?.ariaDescribedby} {...mergedProps} ref={ref} />
}
