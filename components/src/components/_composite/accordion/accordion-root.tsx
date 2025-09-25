import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import {
  type Assign,
  type HTMLProps,
  type PolymorphicProps,
  arkMemo,
} from '@ousia-ui/ark'
import {
  createSplitProps,
  type RenderStrategyProps,
  RenderStrategyPropsProvider,
  splitRenderStrategyProps,
} from '@ousia-ui/ark/utils'
import { type UseAccordionProps, useAccordion } from './use-accordion'
import { AccordionProvider } from './use-accordion-context'

export interface AccordionRootBaseProps extends UseAccordionProps, RenderStrategyProps, PolymorphicProps {}
export interface AccordionRootProps extends Assign<HTMLProps<'div'>, AccordionRootBaseProps> {}

export const AccordionRoot = forwardRef<HTMLDivElement, AccordionRootProps>((props, ref) => {
  const [renderStrategyProps, accordionProps] = splitRenderStrategyProps(props)
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
        <arkMemo.div {...mergedProps} ref={ref} />
      </RenderStrategyPropsProvider>
    </AccordionProvider>
  )
})

AccordionRoot.displayName = 'AccordionRoot'
