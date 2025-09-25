import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import { useCheckboxContext } from './use-checkbox-context'

export interface CheckboxHiddenInputBaseProps {}
export interface CheckboxHiddenInputProps extends HTMLProps<'input'>, CheckboxHiddenInputBaseProps {}

export const CheckboxHiddenInput = forwardRef<HTMLInputElement, CheckboxHiddenInputProps>((props, ref) => {
  const checkbox = useCheckboxContext()
  const mergedProps = mergeProps(checkbox.getHiddenInputProps(), props)
  const field = useFieldContext()

  return <arkSimple.input aria-describedby={field?.ariaDescribedby} {...mergedProps} ref={ref} />
})

CheckboxHiddenInput.displayName = 'CheckboxHiddenInput'
