import { type Assign, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseNumberInputProps, useNumberInput } from './use-number-input'
import { NumberInputProvider } from './use-number-input-context'

export interface NumberInputRootBaseProps extends UseNumberInputProps, PolymorphicProps {}
export interface NumberInputRootProps
  extends Assign<ComponentProps<'div'>, NumberInputRootBaseProps> {}

export const NumberInputRoot = (props: NumberInputRootProps) => {
  const { ref, ...restProps } = props
  const [useNumberInputProps, localProps] = createSplitProps<UseNumberInputProps>()(restProps, [
    'allowMouseWheel',
    'allowOverflow',
    'clampValueOnBlur',
    'defaultValue',
    'disabled',
    'focusInputOnChange',
    'form',
    'formatOptions',
    'id',
    'ids',
    'inputMode',
    'invalid',
    'locale',
    'max',
    'min',
    'name',
    'onFocusChange',
    'onValueChange',
    'onValueInvalid',
    'pattern',
    'readOnly',
    'required',
    'spinOnPress',
    'step',
    'translations',
    'value',
  ])
  const numberInput = useNumberInput(useNumberInputProps)
  const mergedProps = mergeProps(numberInput.getRootProps(), localProps)

  return (
    <NumberInputProvider value={numberInput}>
      <ark.div {...mergedProps} ref={ref} />
    </NumberInputProvider>
  )
}
