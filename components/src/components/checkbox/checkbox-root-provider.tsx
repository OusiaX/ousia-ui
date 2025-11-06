import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseCheckboxReturn } from './use-checkbox'
import { CheckboxProvider } from './use-checkbox-context'

interface RootProviderProps {
  value: UseCheckboxReturn
}

export const CheckboxRootProviderElement = 'label' as const
export interface CheckboxRootProviderProps
  extends ComponentProps<typeof CheckboxRootProviderElement>,
    RootProviderProps,
    PolymorphicProps {}

export const CheckboxRootProvider = (props: CheckboxRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: checkbox }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(checkbox.getRootProps(), localProps)

  return (
    <CheckboxProvider value={checkbox}>
      <ark.label {...mergedProps} ref={ref} />
    </CheckboxProvider>
  )
}
