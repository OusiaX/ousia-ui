import { type PolymorphicProps, ark } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ViewProps } from '@zag-js/date-picker'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'
import { DatePickerViewPropsProvider } from './use-date-picker-view-props-context'

export interface DatePickerViewBaseProps extends Required<ViewProps>, PolymorphicProps {}
export interface DatePickerViewProps extends ComponentProps<'div'>, DatePickerViewBaseProps {}

export const DatePickerView = (props: DatePickerViewProps) => {
  const { ref, ...restProps } = props
  const [viewProps, localProps] = createSplitProps<Required<ViewProps>>()(restProps, ['view'])
  const datePicker = useDatePickerContext()

  return (
    <DatePickerViewPropsProvider value={viewProps}>
      <ark.div
        hidden={datePicker.view !== viewProps.view}
        data-scope="date-picker"
        data-part="view"
        {...localProps}
        ref={ref}
      />
    </DatePickerViewPropsProvider>
  )
}
