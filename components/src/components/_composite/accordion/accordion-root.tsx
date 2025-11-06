import { ark, mergeProps } from '@ousia-ui/ark'
import type { Assigns, PolymorphicProps } from '@ousia-ui/ark'
import {
  type RenderStrategyProps,
  RenderStrategyPropsProvider,
  createSplitProps,
  splitRenderStrategyProps,
} from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseAccordionProps, useAccordion } from './use-accordion'
import { AccordionProvider } from './use-accordion-context'

export const AccordionRootElement = 'div' as const
export type AccordionRootProps = Assigns<
  ComponentProps<typeof AccordionRootElement>,
  UseAccordionProps,
  RenderStrategyProps,
  PolymorphicProps
>

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
