import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { usePinInputContext } from './use-pin-input-context'

export const PinInputHiddenInputElement = 'input' as const
export interface PinInputHiddenInputProps
  extends ComponentProps<typeof PinInputHiddenInputElement>,
    PolymorphicProps {}

export const PinInputHiddenInput = (props: PinInputHiddenInputProps) => {
  const { ref, ...restProps } = props
  const pinInput = usePinInputContext()
  const mergedProps = mergeProps(pinInput.getHiddenInputProps(), restProps)
  const field = useFieldContext()

  return <ark.input aria-describedby={field?.ariaDescribedby} {...mergedProps} ref={ref} />
}
