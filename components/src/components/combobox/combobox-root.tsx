import { mergeProps } from '@zag-js/react'
import type { JSX } from 'react'
import type { Ref } from 'react'
import type { RefAttributes } from 'react'
import { forwardRef } from 'react'
import type { CollectionItem } from '@zag-js/collection'
import type { Assign, HTMLProps, PolymorphicProps } from '@ousia-ui/ark'
import { arkMemo } from '@ousia-ui/ark'
import { createSplitProps, usePresence, type UsePresenceProps, PresenceProvider, splitPresenceProps } from '@ousia-ui/ark/utils'
import type { UseComboboxProps } from './use-combobox'
import { useCombobox } from './use-combobox'
import { ComboboxProvider } from './use-combobox-context'

export interface ComboboxRootBaseProps<T extends CollectionItem>
  extends UseComboboxProps<T>,
    UsePresenceProps,
    PolymorphicProps {}
export interface ComboboxRootProps<T extends CollectionItem>
  extends Assign<HTMLProps<'div'>, ComboboxRootBaseProps<T>> {}

const ComboboxImpl = <T extends CollectionItem>(props: ComboboxRootProps<T>, ref: Ref<HTMLDivElement>) => {
  const [presenceProps, comboboxProps] = splitPresenceProps(props)
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
        <arkMemo.div {...mergedProps} ref={ref} />
      </PresenceProvider>
    </ComboboxProvider>
  )
}

export type ComboboxRootComponent<P = {}> = <T extends CollectionItem>(
  props: Assign<ComboboxRootProps<T>, P> & RefAttributes<HTMLDivElement>,
) => JSX.Element

export const ComboboxRoot = forwardRef(ComboboxImpl) as ComboboxRootComponent
