import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  PresenceProvider,
  type UsePresenceProps,
  createSplitProps,
  splitPresenceProps,
  usePresence,
} from '@ousia-ui/ark/utils'
import type { CollectionItem } from '@zag-js/collection'
import type { ComponentProps, JSX } from 'react'
import { type UseSelectProps, useSelect } from './use-select'
import { SelectProvider } from './use-select-context'

export const SelectRootElement = 'div' as const
export type SelectRootProps<T extends CollectionItem> = Assigns<
  ComponentProps<typeof SelectRootElement>,
  UseSelectProps<T>,
  UsePresenceProps,
  PolymorphicProps
>

const SelectImpl = <T extends CollectionItem>(props: SelectRootProps<T>) => {
  const { ref, ...restProps } = props
  const [presenceProps, selectProps] = splitPresenceProps(restProps)
  const [useSelectProps, localProps] = createSplitProps<UseSelectProps<T>>()(selectProps, [
    'closeOnSelect',
    'collection',
    'composite',
    'defaultHighlightedValue',
    'defaultOpen',
    'defaultValue',
    'deselectable',
    'disabled',
    'form',
    'highlightedValue',
    'id',
    'ids',
    'invalid',
    'loopFocus',
    'multiple',
    'name',
    'onFocusOutside',
    'onHighlightChange',
    'onInteractOutside',
    'onOpenChange',
    'onPointerDownOutside',
    'onSelect',
    'onValueChange',
    'open',
    'positioning',
    'readOnly',
    'required',
    'scrollToIndexFn',
    'value',
  ])
  const select = useSelect(useSelectProps)
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

export type SelectRootComponent<P = Record<string, unknown>> = <T extends CollectionItem>(
  props: SelectRootProps<T> & P,
) => JSX.Element

export const SelectRoot = SelectImpl as SelectRootComponent
