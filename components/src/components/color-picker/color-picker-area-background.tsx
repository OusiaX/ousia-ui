import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLProps, arkSimple } from '@ousia-ui/ark'
import { useColorPickerAreaPropsContext } from './use-color-picker-area-props-context'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerAreaBackgroundBaseProps {}
export interface ColorPickerAreaBackgroundProps extends HTMLProps<'div'>, ColorPickerAreaBackgroundBaseProps {}

export const ColorPickerAreaBackground = forwardRef<HTMLDivElement, ColorPickerAreaBackgroundProps>((props, ref) => {
  const colorPicker = useColorPickerContext()
  const areaProps = useColorPickerAreaPropsContext()
  const mergedProps = mergeProps(colorPicker.getAreaBackgroundProps(areaProps), props)

  return <arkSimple.div {...mergedProps} ref={ref} />
})

ColorPickerAreaBackground.displayName = 'ColorPickerAreaBackground'
