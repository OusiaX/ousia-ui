import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useAccordionContext } from './use-accordion-context'
import { useAccordionItemPropsContext } from './use-accordion-item-props-context'

export interface AccordionItemIndicatorBaseProps extends PolymorphicProps {}
export interface AccordionItemIndicatorProps
  extends ComponentProps<'div'>,
    AccordionItemIndicatorBaseProps {}

export const AccordionItemIndicator = (props: AccordionItemIndicatorProps) => {
  const { ref, ...restProps } = props
  const accordion = useAccordionContext()
  const itemProps = useAccordionItemPropsContext()
  const mergedProps = mergeProps(accordion.getItemIndicatorProps(itemProps), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
