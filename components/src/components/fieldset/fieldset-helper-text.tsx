import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldsetContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface FieldsetHelperTextProps extends ComponentProps<'span'>, PolymorphicProps {}

export const FieldsetHelperText = (props: FieldsetHelperTextProps) => {
  const { ref, ...restProps } = props
  const fieldset = useFieldsetContext()
  const mergedProps = mergeProps(fieldset.getHelperTextProps(), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
