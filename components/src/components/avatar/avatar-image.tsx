import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useAvatarContext } from './use-avatar-context'

export interface AvatarImageProps extends ComponentProps<'img'>, PolymorphicProps {}

export const AvatarImage = (props: AvatarImageProps) => {
  const { ref, ...restProps } = props
  const avatar = useAvatarContext()
  const mergedProps = mergeProps(avatar.getImageProps(), restProps)

  return <ark.img {...mergedProps} ref={ref} />
}
