import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { usePinInputContext } from './use-pin-input-context'

export interface PinInputLabelBaseProps extends PolymorphicProps {}
export interface PinInputLabelProps extends ComponentProps<'label'>, PinInputLabelBaseProps {}

export const PinInputLabel = (props: PinInputLabelProps) => {
  const { ref, ...restProps } = props
  const pinInput = usePinInputContext()
  const mergedProps = mergeProps(pinInput.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
