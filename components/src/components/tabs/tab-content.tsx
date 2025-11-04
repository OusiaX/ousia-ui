import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  PresenceProvider,
  composeRefs,
  createSplitProps,
  usePresence,
  useRenderStrategyPropsContext,
} from '@ousia-ui/ark/utils'
import type { ContentProps } from '@zag-js/tabs'
import type { ComponentProps } from 'react'
import { useTabsContext } from './use-tabs-context'

export interface TabContentBaseProps extends ContentProps, PolymorphicProps {}
export interface TabContentProps extends ComponentProps<'div'>, TabContentBaseProps {}

export const TabContent = (props: TabContentProps) => {
  const { ref, ...restProps } = props
  const [contentProps, localProps] = createSplitProps<ContentProps>()(restProps, ['value'])
  const tabs = useTabsContext()
  const renderStrategyProps = useRenderStrategyPropsContext()

  const presence = usePresence({
    ...renderStrategyProps,
    // @ts-ignore - TypeScript type inference issue with spreading RenderStrategyProps
    present: tabs.value === restProps.value,
    immediate: true,
  })

  const mergedProps = mergeProps(
    tabs.getContentProps(contentProps),
    presence.getPresenceProps(),
    localProps,
  )

  return (
    <PresenceProvider value={presence}>
      {presence.unmounted ? null : (
        <ark.div {...mergedProps} ref={composeRefs(presence.ref, ref)} />
      )}
    </PresenceProvider>
  )
}
