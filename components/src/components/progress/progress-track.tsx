import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { useProgressContext } from './use-progress-context'

export interface ProgressTrackBaseProps extends PolymorphicProps {}
export interface ProgressTrackProps extends HTMLProps<'div'>, ProgressTrackBaseProps {}

export const ProgressTrack = forwardRef<HTMLDivElement, ProgressTrackProps>((props, ref) => {
  const progress = useProgressContext()
  const mergedProps = mergeProps(progress.getTrackProps(), props)

  return <ark.div {...mergedProps} ref={ref} />
})

ProgressTrack.displayName = 'ProgressTrack'
