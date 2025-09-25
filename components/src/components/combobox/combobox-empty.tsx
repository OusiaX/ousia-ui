import { forwardRef } from 'react'
import type { HTMLProps, PolymorphicProps } from '@ousia-ui/ark'
import { ark } from '@ousia-ui/ark'
import { useComboboxContext } from './use-combobox-context'

export interface ComboboxEmptyBaseProps extends PolymorphicProps {}
export interface ComboboxEmptyProps extends HTMLProps<'div'>, ComboboxEmptyBaseProps {}

export const ComboboxEmpty = forwardRef<HTMLDivElement, ComboboxEmptyProps>((props, ref) => {
  const combobox = useComboboxContext()

  if (combobox.collection.size !== 0) {
    return null
  }

  return <ark.div role="presentation" data-scope="combobox" data-part="empty" ref={ref} {...props} />
})

ComboboxEmpty.displayName = 'ComboboxEmpty'
