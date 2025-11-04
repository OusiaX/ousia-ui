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
  extends ComponentProps<'div'>,
    SelectRootProviderBaseProps<T> {}

const SelectImpl = <T extends CollectionItem>(props: SelectRootProviderProps<T>) => {
  const { ref, ...restProps } = props
  const [presenceProps, selectProps] = splitPresenceProps(restProps)
  const [{ value: select }, localProps] = createSplitProps<RootProviderProps<T>>()(selectProps, [
    'value',
  ])
  const presence = usePresence(mergeProps({ present: select.open }, presenceProps))
  const mergedProps = mergeProps(select.getRootProps(), localProps)

  return (
    <SelectProvider value={select}>
      <PresenceProvider value={presence}>
        <ark.div {...mergedProps} ref={ref} />
      </PresenceProvider>
    </SelectProvider>
  )
}

export type SelectRootProviderComponent<P = Record<string, unknown>> = <T extends CollectionItem>(
  props: Assign<SelectRootProviderProps<T>, P>,
) => JSX.Element

export const SelectRootProvider = SelectImpl as SelectRootProviderComponent
