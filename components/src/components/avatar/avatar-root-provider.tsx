import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import type { UseAvatarReturn } from './use-avatar'
import { AvatarProvider } from './use-avatar-context'

interface RootProviderProps {
  value: UseAvatarReturn
}

export interface AvatarRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface AvatarRootProviderProps extends HTMLProps<'div'>, AvatarRootProviderBaseProps {}

export const AvatarRootProvider = forwardRef<HTMLDivElement, AvatarRootProviderProps>((props, ref) => {
  const [{ value: avatar }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(avatar.getRootProps(), localProps)

  return (
    <AvatarProvider value={avatar}>
      <arkMemo.div {...mergedProps} ref={ref} />
    </AvatarProvider>
  )
})

AvatarRootProvider.displayName = 'AvatarRootProvider'
