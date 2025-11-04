import { ark, mergeProps } from '@ousia-ui/ark'
import type { PolymorphicProps } from '@ousia-ui/ark'
import {
  type RenderStrategyProps,
  RenderStrategyPropsProvider,
  createSplitProps,
  splitRenderStrategyProps,
} from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseAccordionReturn } from './use-accordion'
import { AccordionProvider } from './use-accordion-context'

interface RootProviderProps {
  value: UseAccordionReturn
}

export interface AccordionRootProviderBaseProps
  extends RootProviderProps,
    RenderStrategyProps,
    PolymorphicProps {}
export interface AccordionRootProviderProps
  extends ComponentProps<'div'>,
    AccordionRootProviderBaseProps {}

export const AccordionRootProvider = (props: AccordionRootProviderProps) => {
  const { ref, ...restProps } = props
  const [renderStrategyProps, accordionProps] = splitRenderStrategyProps(restProps)
  const [{ value: accordion }, localProps] = createSplitProps<RootProviderProps>()(accordionProps, [
    'value',
  ])
  const mergedProps = mergeProps(accordion.getRootProps(), localProps)

  return (
    <AccordionProvider value={accordion}>
      <RenderStrategyPropsProvider value={renderStrategyProps}>
        <ark.div {...mergedProps} ref={ref} />
      </RenderStrategyPropsProvider>
    </AccordionProvider>
  )
}
