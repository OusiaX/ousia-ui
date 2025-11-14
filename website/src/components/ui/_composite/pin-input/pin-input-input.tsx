import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { InputProps } from '@zag-js/pin-input'
import type { ComponentProps } from 'react'
import { usePinInputContext } from './use-pin-input-context'

export const PinInputInputElement = 'input' as const
export interface PinInputInputProps
  extends ComponentProps<typeof PinInputInputElement>,
    InputProps,
    PolymorphicProps {}

export const PinInputInput = (props: PinInputInputProps) => {
  const { ref, ...restProps } = props
  const [inputProps, localProps] = createSplitProps<InputProps>()(restProps, ['index'])
  const pinInput = usePinInputContext()
  const mergedProps = mergeProps(pinInput.getInputProps(inputProps), localProps)

  return <ark.input {...mergedProps} ref={ref} />
}
