import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useSelectContext } from './use-select-context'

export const SelectPositionerElement = 'div' as const
export interface SelectPositionerProps
  extends ComponentProps<typeof SelectPositionerElement>,
    PolymorphicProps {}

export const SelectPositioner = (props: SelectPositionerProps) => {
  const { ref, ...restProps } = props
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getPositionerProps(), restProps)
  const presence = usePresenceContext()

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={ref} />
}
