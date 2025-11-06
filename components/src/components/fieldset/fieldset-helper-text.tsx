import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldsetContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export const FieldsetHelperTextElement = 'span' as const
export interface FieldsetHelperTextProps
  extends ComponentProps<typeof FieldsetHelperTextElement>,
    PolymorphicProps {}

export const FieldsetHelperText = (props: FieldsetHelperTextProps) => {
  const { ref, ...restProps } = props
  const fieldset = useFieldsetContext()
  const mergedProps = mergeProps(fieldset.getHelperTextProps(), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
