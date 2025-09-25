import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '@ousia-ui/ark'
import { usePresenceContext } from '@ousia-ui/ark/utils'
import { useSelectContext } from './use-select-context'

export interface SelectPositionerBaseProps extends PolymorphicProps {}
export interface SelectPositionerProps extends HTMLProps<'div'>, SelectPositionerBaseProps {}

export const SelectPositioner = forwardRef<HTMLDivElement, SelectPositionerProps>((props, ref) => {
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getPositionerProps(), props)
  const presence = usePresenceContext()

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={ref} />
})

SelectPositioner.displayName = 'SelectPositioner'
