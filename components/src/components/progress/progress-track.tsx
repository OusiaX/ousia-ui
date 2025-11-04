import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useProgressContext } from './use-progress-context'

export interface ProgressTrackBaseProps extends PolymorphicProps {}
export interface ProgressTrackProps extends ComponentProps<'div'>, ProgressTrackBaseProps {}

export const ProgressTrack = (props: ProgressTrackProps) => {
  const { ref, ...restProps } = props
  const progress = useProgressContext()
  const mergedProps = mergeProps(progress.getTrackProps(), restProps)

  return <ark.div {...mergedProps} ref={ref} />
}
