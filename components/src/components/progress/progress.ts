'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import { type ProgressVariantProps, progress } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { ProgressCircle } from './progress-circle'
import { ProgressCircleRange } from './progress-circle-range'
import { ProgressCircleTrack } from './progress-circle-track'
import { ProgressLabel, type ProgressLabelElement, type ProgressLabelProps } from './progress-label'
import { ProgressRange, type ProgressRangeElement, type ProgressRangeProps } from './progress-range'
import { ProgressRoot, type ProgressRootElement, type ProgressRootProps } from './progress-root'
import {
  ProgressRootProvider,
  type ProgressRootProviderElement,
  type ProgressRootProviderProps,
} from './progress-root-provider'
import { ProgressTrack, type ProgressTrackElement, type ProgressTrackProps } from './progress-track'
import {
  ProgressValueText,
  type ProgressValueTextElement,
  type ProgressValueTextProps,
} from './progress-value-text'
import { ProgressView, type ProgressViewElement, type ProgressViewProps } from './progress-view'

const { withProvider, withContext } = createStyleContext(progress)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof ProgressRootProviderElement,
  Assign<ProgressRootProviderProps, ProgressVariantProps>
>(ProgressRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof ProgressRootElement,
  Assign<ProgressRootProps, ProgressVariantProps>
>(ProgressRoot, 'root')

export const Circle = withContext<'svg', PolymorphicProps>(ProgressCircle, 'circle')

export const CircleRange = withContext<'circle', PolymorphicProps>(
  ProgressCircleRange,
  'circleRange',
)

export const CircleTrack = withContext<'circle', PolymorphicProps>(
  ProgressCircleTrack,
  'circleTrack',
)

export const Label = withContext<typeof ProgressLabelElement, ProgressLabelProps>(
  ProgressLabel,
  'label',
)

export const Range = withContext<typeof ProgressRangeElement, ProgressRangeProps>(
  ProgressRange,
  'range',
)

export const Track = withContext<typeof ProgressTrackElement, ProgressTrackProps>(
  ProgressTrack,
  'track',
)

export const ValueText = withContext<typeof ProgressValueTextElement, ProgressValueTextProps>(
  ProgressValueText,
  'valueText',
)

export const View = withContext<typeof ProgressViewElement, ProgressViewProps>(ProgressView, 'view')

export { ProgressContext as Context } from './progress-context'
