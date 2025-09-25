import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { useAccordionContext } from './use-accordion-context'
import { useAccordionItemPropsContext } from './use-accordion-item-props-context'
import { useCollapsibleContext } from '@ousia-ui/ark/utils'

export interface AccordionItemTriggerBaseProps extends PolymorphicProps {}
export interface AccordionItemTriggerProps extends HTMLProps<'button'>, AccordionItemTriggerBaseProps {}

export const AccordionItemTrigger = forwardRef<HTMLButtonElement, AccordionItemTriggerProps>((props, ref) => {
  const accordion = useAccordionContext()
  const itemProps = useAccordionItemPropsContext()
  const collapsible = useCollapsibleContext()
  const triggerProps = accordion.getItemTriggerProps(itemProps)
  const mergedProps = mergeProps(
    {
      ...triggerProps,
      'aria-controls': collapsible.isUnmounted ? undefined : triggerProps['aria-controls'],
    },
    props,
  )

  return <ark.button {...mergedProps} ref={ref} />
})

AccordionItemTrigger.displayName = 'AccordionItemTrigger'
