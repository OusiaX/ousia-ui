import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { uniq } from '@zag-js/utils'
import type { ComponentProps } from 'react'
import { useMemo } from 'react'
import { useDatePickerContext } from './use-date-picker-context'

export const DatePickerRangeTextElement = 'div' as const
export interface DatePickerRangeTextProps
  extends ComponentProps<typeof DatePickerRangeTextElement>,
    PolymorphicProps {}

export const DatePickerRangeText = (props: DatePickerRangeTextProps) => {
  const { ref, ...restProps } = props
  const datePicker = useDatePickerContext()
  const mergedProps = mergeProps(datePicker.getRangeTextProps(), restProps)
  const visibleRangeText = useMemo(() => {
    const { start, end } = datePicker.visibleRangeText
    return uniq([start, end]).filter(Boolean).join(' - ')
  }, [datePicker.visibleRangeText])

  return (
    <ark.div {...mergedProps} ref={ref}>
      {visibleRangeText}
    </ark.div>
  )
}
