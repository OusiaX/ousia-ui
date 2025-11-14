import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseSwitchReturn } from './use-switch'
import { SwitchProvider } from './use-switch-context'

interface RootProviderProps {
  value: UseSwitchReturn
}

export const SwitchRootProviderElement = 'label' as const
export interface SwitchRootProviderProps
  extends Assigns<
    ComponentProps<typeof SwitchRootProviderElement>,
    RootProviderProps,
    PolymorphicProps
  > {}

export const SwitchRootProvider = (props: SwitchRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: api }, localProps] = createSplitProps<RootProviderProps>()(restProps, ['value'])
  const mergedProps = mergeProps(api.getRootProps(), localProps)

  return (
    <SwitchProvider value={api}>
      <ark.label {...mergedProps} ref={ref} />
    </SwitchProvider>
  )
}
