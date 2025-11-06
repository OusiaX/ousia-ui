import type { PolymorphicProps } from '@ousia-ui/ark'
import { RenderStrategyPropsProvider, splitRenderStrategyProps } from '@ousia-ui/ark/utils'
import {
  PresenceProvider,
  type UsePresenceProps,
  splitPresenceProps,
  usePresence,
} from '@ousia-ui/ark/utils'
import { mergeProps } from '@zag-js/react'
import type { ReactNode } from 'react'
import type { UseDialogReturn } from './use-dialog'
import { DialogProvider } from './use-dialog-context'

interface RootProviderProps {
  value: UseDialogReturn
}

export interface DialogRootProviderProps
  extends RootProviderProps,
    UsePresenceProps,
    PolymorphicProps {
  children?: ReactNode | undefined
}

export const DialogRootProvider = (props: DialogRootProviderProps) => {
  const [presenceProps, { value: dialog, children }] = splitPresenceProps(props)
  const [renderStrategyProps] = splitRenderStrategyProps(presenceProps)
  const presence = usePresence(mergeProps({ present: dialog.open }, presenceProps))

  return (
    <DialogProvider value={dialog}>
      <RenderStrategyPropsProvider value={renderStrategyProps}>
        <PresenceProvider value={presence}>{children}</PresenceProvider>
      </RenderStrategyPropsProvider>
    </DialogProvider>
  )
}
