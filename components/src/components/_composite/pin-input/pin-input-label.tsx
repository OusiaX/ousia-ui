import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { usePinInputContext } from './use-pin-input-context'

export const PinInputLabelElement = 'label' as const
export interface PinInputLabelProps
  extends ComponentProps<typeof PinInputLabelElement>,
    PolymorphicProps {}

export const PinInputLabel = (props: PinInputLabelProps) => {
  const { ref, ...restProps } = props
  const pinInput = usePinInputContext()
  const mergedProps = mergeProps(pinInput.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
