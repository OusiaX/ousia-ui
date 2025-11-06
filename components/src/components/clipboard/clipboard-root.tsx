import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseClipboardProps, useClipboard } from './use-clipboard'
import { ClipboardProvider } from './use-clipboard-context'

export const ClipboardRootElement = 'div' as const
export type ClipboardRootProps = Assigns<
  ComponentProps<typeof ClipboardRootElement>,
  UseClipboardProps,
  PolymorphicProps
>

export const ClipboardRoot = (props: ClipboardRootProps) => {
  const { ref, ...restProps } = props
  const [useClipboardProps, localProps] = createSplitProps<UseClipboardProps>()(restProps, [
    'defaultValue',
    'id',
    'ids',
    'onStatusChange',
    'onValueChange',
    'timeout',
    'value',
  ])
  const clipboard = useClipboard(useClipboardProps)
  const mergedProps = mergeProps(clipboard.getRootProps(), localProps)

  return (
    <ClipboardProvider value={clipboard}>
      <ark.div ref={ref} {...mergedProps} />
    </ClipboardProvider>
  )
}
