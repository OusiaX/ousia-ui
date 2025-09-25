import { mergeProps } from '@zag-js/react'
import { type JSX, forwardRef } from 'react'
import type { Assign } from '@ousia-ui/ark'
import type { CollectionItem } from '@zag-js/collection'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import { createSplitProps, type UsePresenceProps, usePresence, splitPresenceProps, PresenceProvider } from '@ousia-ui/ark/utils'
import type { UseSelectReturn } from './use-select'
import { SelectProvider } from './use-select-context'

interface RootProviderProps<T extends CollectionItem> {
  value: UseSelectReturn<T>
}
export interface SelectRootProviderBaseProps<T extends CollectionItem>
  extends RootProviderProps<T>,
    UsePresenceProps,
    PolymorphicProps {}
export interface SelectRootProviderProps<T extends CollectionItem>
  extends HTMLProps<'div'>,
    SelectRootProviderBaseProps<T> {}

const SelectImpl = <T extends CollectionItem>(props: SelectRootProviderProps<T>, ref: React.Ref<HTMLDivElement>) => {
  const [presenceProps, selectProps] = splitPresenceProps(props)
  const [{ value: select }, localProps] = createSplitProps<RootProviderProps<T>>()(selectProps, ['value'])
  const presence = usePresence(mergeProps({ present: select.open }, presenceProps))
  const mergedProps = mergeProps(select.getRootProps(), localProps)

  return (
    <SelectProvider value={select}>
      <PresenceProvider value={presence}>
        <arkMemo.div {...mergedProps} ref={ref} />
      </PresenceProvider>
    </SelectProvider>
  )
}

export type SelectRootProviderComponent<P = {}> = <T extends CollectionItem>(
  props: Assign<SelectRootProviderProps<T>, P> & React.RefAttributes<HTMLDivElement>,
) => JSX.Element

export const SelectRootProvider = forwardRef(SelectImpl) as SelectRootProviderComponent
