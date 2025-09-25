import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { UseNumberInputReturn } from './use-number-input'
import { NumberInputProvider } from './use-number-input-context'

interface RootProviderProps {
  value: UseNumberInputReturn
}

export interface NumberInputRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface NumberInputRootProviderProps extends HTMLProps<'div'>, NumberInputRootProviderBaseProps {}

export const NumberInputRootProvider = forwardRef<HTMLDivElement, NumberInputRootProviderProps>((props, ref) => {
  const [{ value: numberInput }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(numberInput.getRootProps(), localProps)

  return (
    <NumberInputProvider value={numberInput}>
      <arkMemo.div {...mergedProps} ref={ref} />
    </NumberInputProvider>
  )
})

NumberInputRootProvider.displayName = 'NumberInputRootProvider'
