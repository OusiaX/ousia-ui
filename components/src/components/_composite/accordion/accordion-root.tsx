import { ark, mergeProps } from '@ousia-ui/ark'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import {
  type RenderStrategyProps,
  RenderStrategyPropsProvider,
  createSplitProps,
  splitRenderStrategyProps,
} from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseAccordionProps, useAccordion } from './use-accordion'
import { AccordionProvider } from './use-accordion-context'

export interface AccordionRootBaseProps
  extends UseAccordionProps,
    RenderStrategyProps,
    PolymorphicProps {}
export interface AccordionRootProps extends Assign<ComponentProps<'div'>, AccordionRootBaseProps> {}

export const AccordionRoot = (props: AccordionRootProps) => {
  const { ref, ...restProps } = props
  const [renderStrategyProps, accordionProps] = splitRenderStrategyProps(restProps)
  const [useAccordionProps, localProps] = createSplitProps<UseAccordionProps>()(accordionProps, [
    'collapsible',
    'defaultValue',
    'disabled',
    'id',
    'ids',
    'multiple',
    'onFocusChange',
    'onValueChange',
    'orientation',
    'value',
  ])
  const accordion = useAccordion(useAccordionProps)
  const mergedProps = mergeProps(accordion.getRootProps(), localProps)

  return (
    <AccordionProvider value={accordion}>
      <RenderStrategyPropsProvider value={renderStrategyProps}>
        <ark.div {...mergedProps} ref={ref} />
      </RenderStrategyPropsProvider>
    </AccordionProvider>
  )
}
