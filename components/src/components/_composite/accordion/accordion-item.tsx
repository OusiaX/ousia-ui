import { mergeProps } from '@ousia-ui/ark'
import type { PolymorphicProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { useRenderStrategyPropsContext } from '@ousia-ui/ark/utils'
import type { ItemProps } from '@zag-js/accordion'
import type { ComponentProps } from 'react'
import { Collapsible } from '~/components/collapsible'
import { useAccordionContext } from './use-accordion-context'
import { AccordionItemProvider } from './use-accordion-item-context'
import { AccordionItemPropsProvider } from './use-accordion-item-props-context'

export const AccordionItemElement = 'div' as const
export interface AccordionItemProps
  extends ComponentProps<typeof AccordionItemElement>,
    ItemProps,
    PolymorphicProps {}

export const AccordionItem = (props: AccordionItemProps) => {
  const { ref, ...restProps } = props
  const [itemProps, localProps] = createSplitProps<ItemProps>()(restProps, ['value', 'disabled'])
  const accordion = useAccordionContext()
  const renderStrategy = useRenderStrategyPropsContext()
  const mergedProps = mergeProps(accordion.getItemProps(itemProps), localProps)
  const item = accordion.getItemState(itemProps)
  const itemContentProps = accordion.getItemContentProps(itemProps)

  return (
    <AccordionItemPropsProvider value={itemProps}>
      <AccordionItemProvider value={item}>
        <Collapsible.Root
          ref={ref}
          open={item.expanded}
          ids={{ content: itemContentProps.id }}
          {...renderStrategy}
          {...mergedProps}
        />
      </AccordionItemProvider>
    </AccordionItemPropsProvider>
  )
}
