import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useProgressContext } from './use-progress-context'

export interface ProgressCircleRangeBaseProps extends PolymorphicProps {}
export interface ProgressCircleRangeProps
  extends ComponentProps<'circle'>,
    ProgressCircleRangeBaseProps {}

export const ProgressCircleRange = (props: ProgressCircleRangeProps) => {
  const { ref, ...restProps } = props
  const progress = useProgressContext()
  const mergedProps = mergeProps(progress.getCircleRangeProps(), restProps)

  return <ark.circle ref={ref} {...mergedProps} />
}
