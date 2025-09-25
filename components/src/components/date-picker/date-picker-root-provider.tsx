import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import { PresenceProvider, type UsePresenceProps, splitPresenceProps, usePresence, createSplitProps } from '@ousia-ui/ark/utils'
import type { UseDatePickerReturn } from './use-date-picker'
import { DatePickerProvider } from './use-date-picker-context'

interface RootProviderProps {
  value: UseDatePickerReturn
}

export interface DatePickerRootProviderBaseProps extends RootProviderProps, UsePresenceProps, PolymorphicProps {}
export interface DatePickerRootProviderProps extends HTMLProps<'div'>, DatePickerRootProviderBaseProps {}

export const DatePickerRootProvider = forwardRef<HTMLDivElement, DatePickerRootProviderProps>((props, ref) => {
  const [presenceProps, datePickerProps] = splitPresenceProps(props)
  const [{ value: datePicker }, localProps] = createSplitProps<RootProviderProps>()(datePickerProps, ['value'])
  const presence = usePresence(mergeProps({ present: datePicker.open }, presenceProps))
  const mergedProps = mergeProps(datePicker.getRootProps(), localProps)

  return (
    <DatePickerProvider value={datePicker}>
      <PresenceProvider value={presence}>
        <arkMemo.div {...mergedProps} ref={ref} />
      </PresenceProvider>
    </DatePickerProvider>
  )
})

DatePickerRootProvider.displayName = 'DatePickerRootProvider'
