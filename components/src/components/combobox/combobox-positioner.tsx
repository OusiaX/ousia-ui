import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { useComboboxContext } from './use-combobox-context'

export const ComboboxPositionerElement = 'div' as const
export interface ComboboxPositionerProps
  extends ComponentProps<typeof ComboboxPositionerElement>,
    PolymorphicProps {}

export const ComboboxPositioner = (props: ComboboxPositionerProps) => {
  const { ref, ...restProps } = props
  const combobox = useComboboxContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(combobox.getPositionerProps(), restProps)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={ref} />
}
