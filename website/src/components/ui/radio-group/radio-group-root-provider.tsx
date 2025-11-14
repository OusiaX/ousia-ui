import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseRadioGroupReturn } from './use-radio-group'
import { RadioGroupProvider } from './use-radio-group-context'

interface RootProviderProps {
  value: UseRadioGroupReturn
}

export const RadioGroupRootProviderElement = 'div' as const
export interface RadioGroupRootProviderProps
  extends ComponentProps<typeof RadioGroupRootProviderElement>,
    RootProviderProps,
    PolymorphicProps {}

export const RadioGroupRootProvider = (props: RadioGroupRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: radioGroup }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(radioGroup.getRootProps(), localProps)

  return (
    <RadioGroupProvider value={radioGroup}>
      <ark.div {...mergedProps} ref={ref} />
    </RadioGroupProvider>
  )
}
