import type { Assigns } from '@ousia-ui/ark'
import { RenderStrategyPropsProvider, splitRenderStrategyProps } from '@ousia-ui/ark/utils'
import {
  PresenceProvider,
  type UsePresenceProps,
  splitPresenceProps,
  usePresence,
} from '@ousia-ui/ark/utils'
import { mergeProps } from '@zag-js/react'
import type { ReactNode } from 'react'
import type { UseDialogProps } from './use-dialog'
import { useDialog } from './use-dialog'
import { DialogProvider } from './use-dialog-context'

export type DialogRootProps = Assigns<
  UseDialogProps,
  UsePresenceProps,
  {
    children?: ReactNode | undefined
  }
>

export const DialogRoot = (props: DialogRootProps) => {
  const [presenceProps, { children, ...localProps }] = splitPresenceProps(props)
  const [renderStrategyProps] = splitRenderStrategyProps(presenceProps)
  const dialog = useDialog(localProps)
  const presence = usePresence(mergeProps({ present: dialog.open }, presenceProps))

  return (
    <DialogProvider value={dialog}>
      <RenderStrategyPropsProvider value={renderStrategyProps}>
        <PresenceProvider value={presence}>{children}</PresenceProvider>
      </RenderStrategyPropsProvider>
    </DialogProvider>
  )
}
