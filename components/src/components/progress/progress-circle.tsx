import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useProgressContext } from './use-progress-context'

export interface ProgressCircleProps extends ComponentProps<'svg'>, PolymorphicProps {}

export const ProgressCircle = (props: ProgressCircleProps) => {
  const { ref, ...restProps } = props
  const progress = useProgressContext()
  const mergedProps = mergeProps(progress.getCircleProps(), restProps)

  return <ark.svg ref={ref} {...mergedProps} />
}
