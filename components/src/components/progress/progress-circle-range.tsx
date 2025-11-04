import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useProgressContext } from './use-progress-context'

export interface ProgressCircleRangeProps extends ComponentProps<'circle'>, PolymorphicProps {}

export const ProgressCircleRange = (props: ProgressCircleRangeProps) => {
  const { ref, ...restProps } = props
  const progress = useProgressContext()
  const mergedProps = mergeProps(progress.getCircleRangeProps(), restProps)

  return <ark.circle ref={ref} {...mergedProps} />
}
