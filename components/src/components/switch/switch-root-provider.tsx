import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkSimple } from '@ousia-ui/ark'
import type { UseSwitchReturn } from './use-switch'
import { SwitchProvider } from './use-switch-context'

interface RootProviderProps {
  value: UseSwitchReturn
}

export interface SwitchRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface SwitchRootProviderProps extends HTMLProps<'label'>, SwitchRootProviderBaseProps {}

export const SwitchRootProvider = forwardRef<HTMLLabelElement, SwitchRootProviderProps>((props, ref) => {
  const [{ value: api }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(api.getRootProps(), localProps)

  return (
    <SwitchProvider value={api}>
      <arkSimple.label {...mergedProps} ref={ref} />
    </SwitchProvider>
  )
})

SwitchRootProvider.displayName = 'SwitchRootProvider'
