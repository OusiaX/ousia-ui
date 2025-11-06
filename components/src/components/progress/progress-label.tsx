import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useProgressContext } from './use-progress-context'

export const ProgressLabelElement = 'label' as const
export interface ProgressLabelProps
  extends ComponentProps<typeof ProgressLabelElement>,
    PolymorphicProps {}

export const ProgressLabel = (props: ProgressLabelProps) => {
  const { ref, ...restProps } = props
  const progress = useProgressContext()
  const mergedProps = mergeProps(progress.getLabelProps(), restProps)

  return <ark.label {...mergedProps} ref={ref} />
}
