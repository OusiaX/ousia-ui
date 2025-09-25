import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import { PresenceProvider, type UsePresenceProps, createSplitProps, splitPresenceProps, usePresence } from '@ousia-ui/ark/utils'
import type { UseColorPickerReturn } from './use-color-picker'
import { ColorPickerProvider } from './use-color-picker-context'

interface RootProviderProps {
  value: UseColorPickerReturn
}

export interface ColorPickerRootProviderBaseProps extends RootProviderProps, UsePresenceProps, PolymorphicProps {}
export interface ColorPickerRootProviderProps extends HTMLProps<'div'>, ColorPickerRootProviderBaseProps {}

export const ColorPickerRootProvider = forwardRef<HTMLDivElement, ColorPickerRootProviderProps>((props, ref) => {
  const [presenceProps, colorPickerProps] = splitPresenceProps(props)
  const [{ value: colorPicker }, localProps] = createSplitProps<RootProviderProps>()(colorPickerProps, ['value'])
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

ColorPickerRootProvider.displayName = 'ColorPickerRootProvider'
