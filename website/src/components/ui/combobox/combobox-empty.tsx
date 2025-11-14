import { type PolymorphicProps, ark } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useComboboxContext } from './use-combobox-context'

export const ComboboxEmptyElement = 'div' as const
export interface ComboboxEmptyProps
  extends ComponentProps<typeof ComboboxEmptyElement>,
    PolymorphicProps {}

export const ComboboxEmpty = (props: ComboboxEmptyProps) => {
  const { ref, ...restProps } = props
  const combobox = useComboboxContext()

  if (combobox.collection.size !== 0) {
    return null
  }

  return (
    <ark.div role="presentation" data-scope="combobox" data-part="empty" ref={ref} {...restProps} />
  )
}
