import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { TriggerProps } from '@zag-js/combobox'
import type { ComponentProps } from 'react'
import { useComboboxContext } from './use-combobox-context'

export interface ComboboxTriggerBaseProps extends TriggerProps, PolymorphicProps {}
export interface ComboboxTriggerProps extends ComponentProps<'button'>, ComboboxTriggerBaseProps {}

export const ComboboxTrigger = (props: ComboboxTriggerProps) => {
  const { ref, ...restProps } = props
  const [triggerProps, localProps] = createSplitProps<TriggerProps>()(restProps, ['focusable'])
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(combobox.getTriggerProps(triggerProps), localProps)

  return <ark.button {...mergedProps} ref={ref} />
}
