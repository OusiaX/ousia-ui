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
import type { UseComboboxProps } from './use-combobox'
import { useCombobox } from './use-combobox'
import { ComboboxProvider } from './use-combobox-context'

export const ComboboxRootElement = 'div' as const
export type ComboboxRootProps<T extends CollectionItem> = Assigns<
  ComponentProps<typeof ComboboxRootElement>,
  UseComboboxProps<T>,
  UsePresenceProps,
  PolymorphicProps
>

const ComboboxImpl = <T extends CollectionItem>(props: ComboboxRootProps<T>) => {
  const { ref, ...restProps } = props
  const [presenceProps, comboboxProps] = splitPresenceProps(restProps)
  const [useComboboxProps, localProps] = createSplitProps<UseComboboxProps<T>>()(comboboxProps, [
    'allowCustomValue',
    'autoFocus',
    'closeOnSelect',
    'collection',
    'composite',
    'defaultHighlightedValue',
    'defaultInputValue',
    'defaultOpen',
    'defaultValue',
    'disabled',
    'disableLayer',
    'form',
    'highlightedValue',
    'id',
    'ids',
    'inputBehavior',
    'inputValue',
    'invalid',
    'loopFocus',
    'multiple',
    'name',
    'navigate',
    'onFocusOutside',
    'onHighlightChange',
    'onInputValueChange',
    'onInteractOutside',
    'onOpenChange',
    'onPointerDownOutside',
    'onSelect',
    'onValueChange',
    'open',
    'openOnChange',
    'openOnClick',
    'openOnKeyPress',
    'placeholder',
    'positioning',
    'readOnly',
    'required',
    'scrollToIndexFn',
    'selectionBehavior',
    'translations',
    'value',
  ])
  const combobox = useCombobox(useComboboxProps)
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

export type ComboboxRootComponent<P = Record<string, unknown>> = <T extends CollectionItem>(
  props: ComboboxRootProps<T> & P,
) => JSX.Element

export const ComboboxRoot = ComboboxImpl as unknown as ComboboxRootComponent
