import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseRadioGroupProps, useRadioGroup } from './use-radio-group'
import { RadioGroupProvider } from './use-radio-group-context'

export const RadioGroupRootElement = 'div' as const
export type RadioGroupRootProps = Assigns<
  ComponentProps<typeof RadioGroupRootElement>,
  UseRadioGroupProps,
  PolymorphicProps
>

export const RadioGroupRoot = (props: RadioGroupRootProps) => {
  const { ref, ...restProps } = props
  const [useRadioGroupProps, localProps] = createSplitProps<UseRadioGroupProps>()(restProps, [
    'defaultValue',
    'disabled',
    'form',
    'id',
    'ids',
    'name',
    'onValueChange',
    'orientation',
    'readOnly',
    'value',
  ])
  const radioGroup = useRadioGroup(useRadioGroupProps)
  const mergedProps = mergeProps(radioGroup.getRootProps(), localProps)

  return (
    <RadioGroupProvider value={radioGroup}>
      <ark.div {...mergedProps} ref={ref} />
    </RadioGroupProvider>
  )
}
