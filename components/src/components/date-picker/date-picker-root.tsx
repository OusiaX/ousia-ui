import { type Assign, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  PresenceProvider,
  type UsePresenceProps,
  createSplitProps,
  splitPresenceProps,
  usePresence,
} from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseDatePickerProps, useDatePicker } from './use-date-picker'
import { DatePickerProvider } from './use-date-picker-context'

export interface DatePickerRootBaseProps
  extends UseDatePickerProps,
    UsePresenceProps,
    PolymorphicProps {}
export interface DatePickerRootProps
  extends Assign<ComponentProps<'div'>, DatePickerRootBaseProps> {}

export const DatePickerRoot = (props: DatePickerRootProps) => {
  const { ref, ...restProps } = props
  const [presenceProps, datePickerProps] = splitPresenceProps(restProps)
  const [useDatePickerProps, localProps] = createSplitProps<UseDatePickerProps>()(datePickerProps, [
    'closeOnSelect',
    'defaultFocusedValue',
    'defaultOpen',
    'defaultValue',
    'defaultView',
    'disabled',
    'fixedWeeks',
    'focusedValue',
    'format',
    'id',
    'ids',
    'isDateUnavailable',
    'locale',
    'max',
    'maxView',
    'min',
    'minView',
    'name',
    'numOfMonths',
    'onFocusChange',
    'onOpenChange',
    'onValueChange',
    'onViewChange',
    'open',
    'outsideDaySelectable',
    'parse',
    'placeholder',
    'positioning',
    'readOnly',
    'selectionMode',
    'startOfWeek',
    'timeZone',
    'translations',
    'value',
    'view',
    'inline',
  ])
  const datePicker = useDatePicker(useDatePickerProps)
  const presence = usePresence(mergeProps({ present: datePicker.open }, presenceProps))
  const mergedProps = mergeProps(datePicker.getRootProps(), localProps)

  return (
    <DatePickerProvider value={datePicker}>
      <PresenceProvider value={presence}>
        <ark.div {...mergedProps} ref={ref} />
      </PresenceProvider>
    </DatePickerProvider>
  )
}
