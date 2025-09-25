import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type Assign, type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import { PresenceProvider, type UsePresenceProps, createSplitProps, splitPresenceProps, usePresence } from '@ousia-ui/ark/utils'
import { type UseColorPickerProps, useColorPicker } from './use-color-picker'
import { ColorPickerProvider } from './use-color-picker-context'

export interface ColorPickerRootBaseProps extends UseColorPickerProps, UsePresenceProps, PolymorphicProps {}
export interface ColorPickerRootProps extends Assign<HTMLProps<'div'>, ColorPickerRootBaseProps> {}

export const ColorPickerRoot = forwardRef<HTMLDivElement, ColorPickerRootProps>((props, ref) => {
  const [presenceProps, colorPickerProps] = splitPresenceProps(props)
  const [useColorPickerProps, localProps] = createSplitProps<UseColorPickerProps>()(colorPickerProps, [
    'closeOnSelect',
    'defaultOpen',
    'defaultValue',
    'defaultFormat',
    'disabled',
    'format',
    'id',
    'ids',
    'initialFocusEl',
    'invalid',
    'name',
    'onFocusOutside',
    'onFormatChange',
    'onInteractOutside',
    'onOpenChange',
    'onPointerDownOutside',
    'onValueChange',
    'onValueChangeEnd',
    'open',
    'openAutoFocus',
    'positioning',
    'readOnly',
    'required',
    'inline',
    'value',
  ])
  const colorPicker = useColorPicker(useColorPickerProps)
  const presence = usePresence(mergeProps({ present: colorPicker.open }, presenceProps))
  const mergedProps = mergeProps(colorPicker.getRootProps(), localProps)

  return (
    <ColorPickerProvider value={colorPicker}>
      <PresenceProvider value={presence}>
        <arkMemo.div {...mergedProps} ref={ref} />
      </PresenceProvider>
    </ColorPickerProvider>
  )
})

ColorPickerRoot.displayName = 'ColorPickerRoot'
