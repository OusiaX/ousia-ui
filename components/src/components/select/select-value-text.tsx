import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'

export interface SelectValueTextBaseProps extends PolymorphicProps {
  /**
   * Text to display when no value is selected.
   */
  placeholder?: string | undefined
}
export interface SelectValueTextProps extends ComponentProps<'span'>, SelectValueTextBaseProps {}

export const SelectValueText = (props: SelectValueTextProps) => {
  const { ref, children, placeholder, ...localprops } = props
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getValueTextProps(), localprops)

  return (
    <ark.span {...mergedProps} ref={ref}>
      {children || select.valueAsString || placeholder}
    </ark.span>
  )
}
