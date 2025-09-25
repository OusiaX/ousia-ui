import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { useAvatarContext } from './use-avatar-context'

export interface AvatarFallbackBaseProps {}
export interface AvatarFallbackProps extends HTMLProps<'span'>, AvatarFallbackBaseProps {}

export const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>((props, ref) => {
  const avatar = useAvatarContext()
  const mergedProps = mergeProps(avatar.getFallbackProps(), props)

  return <arkSimple.span {...mergedProps} ref={ref} />
})

AvatarFallback.displayName = 'AvatarFallback'
