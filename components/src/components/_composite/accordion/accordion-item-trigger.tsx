import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useCollapsibleContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useAccordionContext } from './use-accordion-context'
import { useAccordionItemPropsContext } from './use-accordion-item-props-context'

export interface AccordionItemTriggerBaseProps extends PolymorphicProps {}
export interface AccordionItemTriggerProps
  extends ComponentProps<'button'>,
    AccordionItemTriggerBaseProps {}

export const AccordionItemTrigger = (props: AccordionItemTriggerProps) => {
  const { ref, ...restProps } = props
  const accordion = useAccordionContext()
  const itemProps = useAccordionItemPropsContext()
  const collapsible = useCollapsibleContext()
  const triggerProps = accordion.getItemTriggerProps(itemProps)
  const mergedProps = mergeProps(
    {
      ...triggerProps,
      'aria-controls': collapsible.isUnmounted ? undefined : triggerProps['aria-controls'],
    },
    restProps,
  )

  return <ark.button {...mergedProps} ref={ref} />
}
