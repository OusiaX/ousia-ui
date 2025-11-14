import type { Assigns } from '@ousia-ui/ark'
import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UsePinInputProps, usePinInput } from './use-pin-input'
import { PinInputProvider } from './use-pin-input-context'

export const PinInputRootElement = 'div' as const
export type PinInputRootProps = Assigns<
  ComponentProps<typeof PinInputRootElement>,
  UsePinInputProps,
  PolymorphicProps
>

export const PinInputRoot = (props: PinInputRootProps) => {
  const { ref, ...restProps } = props
  const [usePinInputProps, localProps] = createSplitProps<UsePinInputProps>()(restProps, [
    'autoFocus',
    'blurOnComplete',
    'count',
    'defaultValue',
    'disabled',
    'form',
    'id',
    'ids',
    'invalid',
    'mask',
    'name',
    'onValueChange',
    'onValueComplete',
    'onValueInvalid',
    'otp',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'selectOnFocus',
    'translations',
    'type',
    'value',
  ])
  const pinInput = usePinInput(usePinInputProps)
  const mergedProps = mergeProps(pinInput.getRootProps(), localProps)

  return (
    <PinInputProvider value={pinInput}>
      <ark.div {...mergedProps} ref={ref} />
    </PinInputProvider>
  )
}
