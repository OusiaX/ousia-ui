import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { usePinInputContext } from './use-pin-input-context'

export const PinInputControlElement = 'div' as const
export interface PinInputControlProps
  extends ComponentProps<typeof PinInputControlElement>,
    PolymorphicProps {}

export const PinInputControl = (props: PinInputControlProps) => {
  const { ref, ...restProps } = props
  const pinInput = usePinInputContext()
  const mergedProps = mergeProps(pinInput.getControlProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
