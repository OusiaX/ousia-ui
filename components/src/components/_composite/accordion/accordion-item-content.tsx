import { type PolymorphicProps, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { Collapsible } from '~/components/collapsible'
import { useAccordionContext } from './use-accordion-context'
import { useAccordionItemPropsContext } from './use-accordion-item-props-context'

export interface AccordionItemContentBaseProps extends PolymorphicProps {}
export interface AccordionItemContentProps
  extends ComponentProps<'div'>,
    AccordionItemContentBaseProps {}

interface VisibilityProps {
  hidden?: boolean | undefined
  'data-state'?: string | undefined
}

const splitVisibilityProps = createSplitProps<VisibilityProps>()

export const AccordionItemContent = (props: AccordionItemContentProps) => {
  const { ref, ...restProps } = props
  const accordion = useAccordionContext()
  const itemProps = useAccordionItemPropsContext()

  const contentProps = accordion.getItemContentProps(itemProps)
  const [, itemContentProps] = splitVisibilityProps(contentProps, ['hidden', 'data-state'])

  const mergedProps = mergeProps(itemContentProps, restProps)

  return <Collapsible.Content ref={ref} {...mergedProps} />
}
