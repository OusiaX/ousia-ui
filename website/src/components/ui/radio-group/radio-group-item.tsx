import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/radio-group'
import type { ComponentProps } from 'react'
import { useRadioGroupContext } from './use-radio-group-context'
import { RadioGroupItemProvider } from './use-radio-group-item-context'
import { RadioGroupItemPropsProvider } from './use-radio-group-item-props-context'

export const RadioGroupItemElement = 'div' as const
export interface RadioGroupItemProps
  extends ComponentProps<typeof RadioGroupItemElement>,
    ItemProps,
    PolymorphicProps {}

export const RadioGroupItem = (props: RadioGroupItemProps) => {
  const { ref, ...restProps } = props
  const [itemProps, localProps] = createSplitProps<ItemProps>()(restProps, [
    'value',
    'disabled',
    'invalid',
  ])
  const radioGroup = useRadioGroupContext()
  const mergedProps = mergeProps(radioGroup.getItemProps(itemProps), localProps)
  const itemState = radioGroup.getItemState(itemProps)

  return (
    <RadioGroupItemProvider value={itemState}>
      <RadioGroupItemPropsProvider value={itemProps}>
        <ark.label {...mergedProps} ref={ref} />
      </RadioGroupItemPropsProvider>
    </RadioGroupItemProvider>
  )
}
