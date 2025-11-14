import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseNumberInputReturn } from './use-number-input'
import { NumberInputProvider } from './use-number-input-context'

interface RootProviderProps {
  value: UseNumberInputReturn
}

export const NumberInputRootProviderElement = 'div' as const
export interface NumberInputRootProviderProps
  extends ComponentProps<typeof NumberInputRootProviderElement>,
    RootProviderProps,
    PolymorphicProps {}

export const NumberInputRootProvider = (props: NumberInputRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: numberInput }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(numberInput.getRootProps(), localProps)

  return (
    <NumberInputProvider value={numberInput}>
      <ark.div {...mergedProps} ref={ref} />
    </NumberInputProvider>
  )
}
