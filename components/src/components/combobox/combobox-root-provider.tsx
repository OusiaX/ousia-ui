import { type Assign, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  PresenceProvider,
  type UsePresenceProps,
  createSplitProps,
  splitPresenceProps,
  usePresence,
} from '@ousia-ui/ark/utils'
import type { CollectionItem } from '@zag-js/collection'
import type { ComponentProps, JSX } from 'react'
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
  extends ComponentProps<'div'>,
    ComboboxRootProviderBaseProps<T> {}

const ComboboxImpl = <T extends CollectionItem>(props: ComboboxRootProviderProps<T>) => {
  const { ref, ...restProps } = props
  const [presenceProps, comboboxProps] = splitPresenceProps(restProps)
  const [{ value: combobox }, localProps] = createSplitProps<RootProviderProps<T>>()(
    comboboxProps,
    ['value'],
  )
  const presence = usePresence(mergeProps({ present: combobox.open }, presenceProps))
  const mergedProps = mergeProps(combobox.getRootProps(), localProps)

  return (
    <ComboboxProvider value={combobox}>
      <PresenceProvider value={presence}>
        <ark.div {...mergedProps} ref={ref} />
      </PresenceProvider>
    </ComboboxProvider>
  )
}

export type ComboboxRootProviderComponent<P = Record<string, unknown>> = <T extends CollectionItem>(
  props: Assign<ComboboxRootProviderProps<T>, P>,
) => JSX.Element

export const ComboboxRootProvider = ComboboxImpl as unknown as ComboboxRootProviderComponent
