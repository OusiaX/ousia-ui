import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface FieldRequiredIndicatorBaseProps extends PolymorphicProps {
  fallback?: React.ReactNode | undefined
}
export interface FieldRequiredIndicatorProps
  extends ComponentProps<'span'>,
    FieldRequiredIndicatorBaseProps {}

export const FieldRequiredIndicator = (props: FieldRequiredIndicatorProps) => {
  const { ref, fallback, ...restProps } = props
  const field = useFieldContext()

  if (!field.required) {
    return fallback
  }

  const mergedProps = mergeProps(field.getRequiredIndicatorProps(), restProps)
  return (
    <ark.span {...mergedProps} ref={ref}>
      {restProps.children ?? '*'}
    </ark.span>
  )
}
