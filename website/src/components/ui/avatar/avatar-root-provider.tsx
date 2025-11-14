import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseAvatarReturn } from './use-avatar'
import { AvatarProvider } from './use-avatar-context'

interface RootProviderProps {
  value: UseAvatarReturn
}

export const AvatarRootProviderElement = 'div' as const
export interface AvatarRootProviderProps
  extends ComponentProps<typeof AvatarRootProviderElement>,
    RootProviderProps,
    PolymorphicProps {}

export const AvatarRootProvider = (props: AvatarRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: avatar }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(avatar.getRootProps(), localProps)

  return (
    <AvatarProvider value={avatar}>
      <ark.div {...mergedProps} ref={ref} />
    </AvatarProvider>
  )
}
