import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import type { UseRadioGroupReturn } from './use-radio-group'
import { RadioGroupProvider } from './use-radio-group-context'

interface RootProviderProps {
  value: UseRadioGroupReturn
}

export interface RadioGroupRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface RadioGroupRootProviderProps extends HTMLProps<'div'>, RadioGroupRootProviderBaseProps {}

export const RadioGroupRootProvider = forwardRef<HTMLDivElement, RadioGroupRootProviderProps>((props, ref) => {
  const [{ value: radioGroup }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(radioGroup.getRootProps(), localProps)

  return (
    <RadioGroupProvider value={radioGroup}>
      <arkMemo.div {...mergedProps} ref={ref} />
    </RadioGroupProvider>
  )
})

RadioGroupRootProvider.displayName = 'RadioGroupRootProvider'
