import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export const FieldHelperTextElement = 'span' as const
export interface FieldHelperTextProps
  extends ComponentProps<typeof FieldHelperTextElement>,
    PolymorphicProps {}

export const FieldHelperText = (props: FieldHelperTextProps) => {
  const { ref, ...restProps } = props
  const field = useFieldContext()
  const mergedProps = mergeProps(field?.getHelperTextProps(), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
