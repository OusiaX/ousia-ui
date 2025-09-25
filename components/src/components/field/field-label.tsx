import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'

export interface FieldLabelBaseProps extends PolymorphicProps {}
export interface FieldLabelProps extends HTMLProps<'label'>, FieldLabelBaseProps {}

export const FieldLabel = forwardRef<HTMLLabelElement, FieldLabelProps>((props, ref) => {
  const field = useFieldContext()
  const mergedProps = mergeProps<HTMLProps<'label'>>(field?.getLabelProps(), props)

  return <ark.label {...mergedProps} ref={ref} />
})

FieldLabel.displayName = 'FieldLabel'
