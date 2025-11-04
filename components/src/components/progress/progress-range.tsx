import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useProgressContext } from './use-progress-context'

export interface ProgressRangeProps extends ComponentProps<'div'>, PolymorphicProps {}

export const ProgressRange = (props: ProgressRangeProps) => {
  const { ref, ...restProps } = props
  const progress = useProgressContext()
  const mergedProps = mergeProps(progress.getRangeProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
