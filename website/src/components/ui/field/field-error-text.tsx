import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export const FieldErrorTextElement = 'span' as const
export interface FieldErrorTextProps
  extends ComponentProps<typeof FieldErrorTextElement>,
    PolymorphicProps {}

export const FieldErrorText = (props: FieldErrorTextProps) => {
  const { ref, ...restProps } = props
  const field = useFieldContext()
  const mergedProps = mergeProps(field.getErrorTextProps(), restProps)

  if (field?.invalid) {
    return <ark.span {...mergedProps} ref={ref} />
  }
  return null
}
