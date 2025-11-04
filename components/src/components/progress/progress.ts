'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type ProgressVariantProps, progress } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { ProgressCircle } from './progress-circle'
import { ProgressCircleRange } from './progress-circle-range'
import { ProgressCircleTrack } from './progress-circle-track'
import { ProgressLabel } from './progress-label'
import { ProgressRange } from './progress-range'
import { ProgressRoot } from './progress-root'
import { ProgressRootProvider } from './progress-root-provider'
import { ProgressTrack } from './progress-track'
import { ProgressValueText } from './progress-value-text'
import { ProgressView } from './progress-view'

const { withProvider, withContext } = createStyleContext(progress)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, ProgressVariantProps>
>(ProgressRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, PolymorphicProps>, ProgressVariantProps>
>(ProgressRoot, 'root')

export const Circle = withContext<SVGSVGElement, Assign<HTMLStyledProps<'svg'>, PolymorphicProps>>(
  ProgressCircle,
  'circle',
)

export const CircleRange = withContext<
  SVGCircleElement,
  Assign<HTMLStyledProps<'circle'>, PolymorphicProps>
>(ProgressCircleRange, 'circleRange')

export const CircleTrack = withContext<
  SVGCircleElement,
  Assign<HTMLStyledProps<'circle'>, PolymorphicProps>
>(ProgressCircleTrack, 'circleTrack')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(ProgressLabel, 'label')

export const Range = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ProgressRange,
  'range',
)

export const Track = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ProgressTrack,
  'track',
)

export const ValueText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(ProgressValueText, 'valueText')

export const View = withContext<HTMLSpanElement, Assign<HTMLStyledProps<'span'>, PolymorphicProps>>(
  ProgressView,
  'view',
)

export { ProgressContext as Context } from './progress-context'
