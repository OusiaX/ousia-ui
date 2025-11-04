import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'

export interface DatePickerPositionerProps extends ComponentProps<'div'>, PolymorphicProps {}

export const DatePickerPositioner = (props: DatePickerPositionerProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const mergedProps = mergeProps(datePicker.getPositionerProps(), restProps)
  const presence = usePresenceContext()

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={ref} />
}
