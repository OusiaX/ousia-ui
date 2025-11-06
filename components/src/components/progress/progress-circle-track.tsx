import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useProgressContext } from './use-progress-context'

export const ProgressCircleTrackElement = 'circle' as const
export interface ProgressCircleTrackProps
  extends ComponentProps<typeof ProgressCircleTrackElement>,
    PolymorphicProps {}

export const ProgressCircleTrack = (props: ProgressCircleTrackProps) => {
  const { ref, ...restProps } = props
  const progress = useProgressContext()
  const mergedProps = mergeProps(progress.getCircleTrackProps(), restProps)

  return <ark.circle ref={ref} {...mergedProps} />
}
