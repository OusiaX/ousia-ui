import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useAvatarContext } from './use-avatar-context'

export interface AvatarFallbackProps extends ComponentProps<'span'>, PolymorphicProps {}

export const AvatarFallback = (props: AvatarFallbackProps) => {
  const { ref, ...restProps } = props
  const avatar = useAvatarContext()
  const mergedProps = mergeProps(avatar.getFallbackProps(), restProps)

  return <ark.span {...mergedProps} ref={ref} />
}
