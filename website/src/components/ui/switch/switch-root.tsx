import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseSwitchProps, useSwitch } from './use-switch'
import { SwitchProvider } from './use-switch-context'

export const SwitchRootElement = 'label' as const
export type SwitchRootProps = Assigns<
  ComponentProps<typeof SwitchRootElement>,
  UseSwitchProps,
  PolymorphicProps
>

export const SwitchRoot = (props: SwitchRootProps) => {
  const { ref, ...restProps } = props
  const [switchProps, localProps] = createSplitProps<UseSwitchProps>()(restProps, [
    'checked',
    'defaultChecked',
    'disabled',
    'form',
    'id',
    'ids',
    'invalid',
    'label',
    'name',
    'onCheckedChange',
    'readOnly',
    'required',
    'value',
  ])

  const switchContext = useSwitch(switchProps)
  const mergedProps = mergeProps(switchContext.getRootProps(), localProps)

  return (
    <SwitchProvider value={switchContext}>
      <ark.label {...mergedProps} ref={ref} />
    </SwitchProvider>
  )
}
