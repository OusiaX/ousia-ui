import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseAvatarProps, useAvatar } from './use-avatar'
import { AvatarProvider } from './use-avatar-context'

export interface AvatarRootBaseProps extends UseAvatarProps, PolymorphicProps {}
export interface AvatarRootProps extends ComponentProps<'div'>, AvatarRootBaseProps {}

export const AvatarRoot = (props: AvatarRootProps) => {
  const { ref, ...restProps } = props
  const [useAvatarProps, localProps] = createSplitProps<UseAvatarProps>()(restProps, [
    'id',
    'ids',
    'onStatusChange',
  ])
  const avatar = useAvatar(useAvatarProps)
  const mergedProps = mergeProps(avatar.getRootProps(), localProps)

  return (
    <AvatarProvider value={avatar}>
      <ark.div {...mergedProps} ref={ref} />
    </AvatarProvider>
  )
}
