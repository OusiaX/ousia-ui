import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { useFieldContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'

export const SelectHiddenSelectElement = 'select' as const
export interface SelectHiddenSelectProps
  extends ComponentProps<typeof SelectHiddenSelectElement>,
    PolymorphicProps {}

export const SelectHiddenSelect = (props: SelectHiddenSelectProps) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getHiddenSelectProps(), restProps)
  const isValueEmpty = select.value.length === 0
  const field = useFieldContext()

  return (
    <ark.select aria-describedby={field?.ariaDescribedby} {...mergedProps} ref={ref}>
      {isValueEmpty && <option value="" />}
      {select.collection.items.map((item, index) => (
        <option
          key={index}
          value={select.collection.getItemValue(item) ?? ''}
          disabled={select.collection.getItemDisabled(item)}
        >
          {select.collection.stringifyItem(item)}
        </option>
      ))}
    </ark.select>
  )
}
