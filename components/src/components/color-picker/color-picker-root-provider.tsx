import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  PresenceProvider,
  type UsePresenceProps,
  createSplitProps,
  splitPresenceProps,
  usePresence,
} from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseColorPickerReturn } from './use-color-picker'
import { ColorPickerProvider } from './use-color-picker-context'

interface RootProviderProps {
  value: UseColorPickerReturn
}

export interface ColorPickerRootProviderBaseProps
  extends RootProviderProps,
    UsePresenceProps,
    PolymorphicProps {}
export interface ColorPickerRootProviderProps
  extends ComponentProps<'div'>,
    ColorPickerRootProviderBaseProps {}

export const ColorPickerRootProvider = (props: ColorPickerRootProviderProps) => {
  const { ref, ...restProps } = props
  const [presenceProps, colorPickerProps] = splitPresenceProps(restProps)
  const [{ value: colorPicker }, localProps] = createSplitProps<RootProviderProps>()(
    colorPickerProps,
    ['value'],
  )
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
