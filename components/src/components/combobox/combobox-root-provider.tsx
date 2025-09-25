import { mergeProps } from '@zag-js/react'
import type { JSX } from 'react'
import type { Ref } from 'react'
import type { RefAttributes } from 'react'
import { forwardRef } from 'react'
import type { CollectionItem } from '@zag-js/collection'
import type { Assign, HTMLProps, PolymorphicProps } from '@ousia-ui/ark'
import { arkMemo } from '@ousia-ui/ark'
import { createSplitProps, usePresence, type UsePresenceProps, PresenceProvider, splitPresenceProps } from '@ousia-ui/ark/utils'
import type { UseComboboxReturn } from './use-combobox'
import { ComboboxProvider } from './use-combobox-context'

interface RootProviderProps<T extends CollectionItem> {
  value: UseComboboxReturn<T>
}
export interface ComboboxRootProviderBaseProps<T extends CollectionItem>
  extends RootProviderProps<T>,
    UsePresenceProps,
    PolymorphicProps {}
export interface ComboboxRootProviderProps<T extends CollectionItem>
  extends HTMLProps<'div'>,
    ComboboxRootProviderBaseProps<T> {}

const ComboboxImpl = <T extends CollectionItem>(props: ComboboxRootProviderProps<T>, ref: Ref<HTMLDivElement>) => {
  const [presenceProps, comboboxProps] = splitPresenceProps(props)
  const [{ value: combobox }, localProps] = createSplitProps<RootProviderProps<T>>()(comboboxProps, ['value'])
  const presence = usePresence(mergeProps({ present: combobox.open }, presenceProps))
  const mergedProps = mergeProps(combobox.getRootProps(), localProps)

  return (
    <ComboboxProvider value={combobox}>
      <PresenceProvider value={presence}>
        <arkMemo.div {...mergedProps} ref={ref} />
      </PresenceProvider>
    </ComboboxProvider>
  )
}

export type ComboboxRootProviderComponent<P = {}> = <T extends CollectionItem>(
  props: Assign<ComboboxRootProviderProps<T>, P> & RefAttributes<HTMLDivElement>,
) => JSX.Element

export const ComboboxRootProvider = forwardRef(ComboboxImpl) as ComboboxRootProviderComponent
