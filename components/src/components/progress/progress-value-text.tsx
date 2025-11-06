import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useProgressContext } from './use-progress-context'

export const ProgressValueTextElement = 'span' as const
export interface ProgressValueTextProps
  extends ComponentProps<typeof ProgressValueTextElement>,
    PolymorphicProps {}

export const ProgressValueText = (props: ProgressValueTextProps) => {
  const { ref, children, ...restProps } = props
  const progress = useProgressContext()
  const mergedProps = mergeProps(progress.getValueTextProps(), restProps)

  return (
    <ark.span {...mergedProps} ref={ref}>
      {children || progress.percentAsString}
    </ark.span>
  )
}
