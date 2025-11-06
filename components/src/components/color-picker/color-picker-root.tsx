import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  PresenceProvider,
  type UsePresenceProps,
  createSplitProps,
  splitPresenceProps,
  usePresence,
} from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseColorPickerProps, useColorPicker } from './use-color-picker'
import { ColorPickerProvider } from './use-color-picker-context'

export const ColorPickerRootElement = 'div' as const
export type ColorPickerRootProps = Assigns<
  ComponentProps<typeof ColorPickerRootElement>,
  UseColorPickerProps,
  UsePresenceProps,
  PolymorphicProps
>

export const ColorPickerRoot = (props: ColorPickerRootProps) => {
  const { ref, ...restProps } = props
  const [presenceProps, colorPickerProps] = splitPresenceProps(restProps)
  const [useColorPickerProps, localProps] = createSplitProps<UseColorPickerProps>()(
    colorPickerProps,
    [
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
    ],
  )
  const colorPicker = useColorPicker(useColorPickerProps)
  const presence = usePresence(mergeProps({ present: colorPicker.open }, presenceProps))
  const mergedProps = mergeProps(colorPicker.getRootProps(), localProps)

  return (
    <ColorPickerProvider value={colorPicker}>
      <PresenceProvider value={presence}>
        <ark.div {...mergedProps} ref={ref} />
      </PresenceProvider>
    </ColorPickerProvider>
  )
}
