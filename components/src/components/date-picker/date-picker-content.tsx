import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { composeRefs, usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useDatePickerContext } from './use-date-picker-context'

export interface DatePickerContentBaseProps extends PolymorphicProps {}
export interface DatePickerContentProps extends ComponentProps<'div'>, DatePickerContentBaseProps {}

export const DatePickerContent = (props: DatePickerContentProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(
    datePicker.getContentProps(),
    presence.getPresenceProps(),
    restProps,
  )

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
}
