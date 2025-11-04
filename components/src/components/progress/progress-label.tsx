import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useProgressContext } from './use-progress-context'

export interface ProgressLabelBaseProps extends PolymorphicProps {}
export interface ProgressLabelProps extends ComponentProps<'label'>, ProgressLabelBaseProps {}

export const ProgressLabel = (props: ProgressLabelProps) => {
  const { ref, ...restProps } = props
  const progress = useProgressContext()
  const mergedProps = mergeProps(progress.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
