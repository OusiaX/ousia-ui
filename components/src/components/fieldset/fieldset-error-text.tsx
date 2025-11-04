import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldsetContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface FieldsetErrorTextBaseProps extends PolymorphicProps {}
export interface FieldsetErrorTextProps
  extends ComponentProps<'span'>,
    FieldsetErrorTextBaseProps {}

export const FieldsetErrorText = (props: FieldsetErrorTextProps) => {
  const { ref, ...restProps } = props
  const fieldset = useFieldsetContext()
  const mergedProps = mergeProps(fieldset.getErrorTextProps(), restProps)

  return fieldset.invalid ? <ark.span {...mergedProps} ref={ref} /> : null
}
