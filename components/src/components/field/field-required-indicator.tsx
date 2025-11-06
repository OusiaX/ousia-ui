import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export const FieldRequiredIndicatorElement = 'span' as const
export interface FieldRequiredIndicatorProps
  extends ComponentProps<typeof FieldRequiredIndicatorElement>,
    PolymorphicProps {
  fallback?: React.ReactNode | undefined
}

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
