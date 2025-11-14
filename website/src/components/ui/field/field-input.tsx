import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface FieldInputProps extends ComponentProps<'input'>, PolymorphicProps {}

export const FieldInput = (props: FieldInputProps) => {
  const { ref, ...restProps } = props
  const field = useFieldContext()
  const mergedProps = mergeProps(field?.getInputProps(), restProps)

  return <ark.input {...mergedProps} ref={ref} />
}
