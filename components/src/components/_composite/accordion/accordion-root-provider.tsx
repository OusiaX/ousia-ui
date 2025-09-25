import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import {
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
import type { UseAccordionReturn } from './use-accordion'
import { AccordionProvider } from './use-accordion-context'

interface RootProviderProps {
  value: UseAccordionReturn
}

export interface AccordionRootProviderBaseProps extends RootProviderProps, RenderStrategyProps, PolymorphicProps {}
export interface AccordionRootProviderProps extends HTMLProps<'div'>, AccordionRootProviderBaseProps {}

export const AccordionRootProvider = forwardRef<HTMLDivElement, AccordionRootProviderProps>((props, ref) => {
  const [renderStrategyProps, accordionProps] = splitRenderStrategyProps(props)
  const [{ value: accordion }, localProps] = createSplitProps<RootProviderProps>()(accordionProps, ['value'])
  const mergedProps = mergeProps(accordion.getRootProps(), localProps)

  return (
    <AccordionProvider value={accordion}>
      <RenderStrategyPropsProvider value={renderStrategyProps}>
        <arkMemo.div {...mergedProps} ref={ref} />
      </RenderStrategyPropsProvider>
    </AccordionProvider>
  )
})

AccordionRootProvider.displayName = 'AccordionRootProvider'
