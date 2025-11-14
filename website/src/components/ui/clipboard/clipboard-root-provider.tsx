import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseClipboardReturn } from './use-clipboard'
import { ClipboardProvider } from './use-clipboard-context'

interface RootProviderProps {
  value: UseClipboardReturn
}

export const ClipboardRootProviderElement = 'div' as const
export interface ClipboardRootProviderProps
  extends ComponentProps<typeof ClipboardRootProviderElement>,
    RootProviderProps,
    PolymorphicProps {}

export const ClipboardRootProvider = (props: ClipboardRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: clipboard }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(clipboard.getRootProps(), localProps)

  return (
    <ClipboardProvider value={clipboard}>
      <ark.div ref={ref} {...mergedProps} />
    </ClipboardProvider>
  )
}
