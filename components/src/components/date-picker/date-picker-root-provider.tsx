import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  PresenceProvider,
  type UsePresenceProps,
  createSplitProps,
  splitPresenceProps,
  usePresence,
} from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseDatePickerReturn } from './use-date-picker'
import { DatePickerProvider } from './use-date-picker-context'

interface RootProviderProps {
  value: UseDatePickerReturn
}

export interface DatePickerRootProviderBaseProps
  extends RootProviderProps,
    UsePresenceProps,
    PolymorphicProps {}
export interface DatePickerRootProviderProps
  extends ComponentProps<'div'>,
    DatePickerRootProviderBaseProps {}

export const DatePickerRootProvider = (props: DatePickerRootProviderProps) => {
  const { ref, ...restProps } = props
  const [presenceProps, datePickerProps] = splitPresenceProps(restProps)
  const [{ value: datePicker }, localProps] = createSplitProps<RootProviderProps>()(
    datePickerProps,
    ['value'],
  )
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
