'use client'
import type { Assign } from '@ousia-ui/ark'
import type { ReactNode } from 'react'
import * as StyledSlider from './slider'

export type SliderProps = Assign<
  StyledSlider.RootProps,
  {
    children?: ReactNode
    marks?: {
      value: number
      label?: ReactNode
    }[]
  }
>

export const Slider = (props: SliderProps) => {
  const { ref, ...restProps } = props
  const { children, marks, ...rootProps } = restProps

  return (
    <StyledSlider.Root ref={ref} {...rootProps}>
      <StyledSlider.Context>
        {(api) => (
          <>
            {children && <StyledSlider.Label>{children}</StyledSlider.Label>}
            <StyledSlider.Control>
              <StyledSlider.Track>
                <StyledSlider.Range />
              </StyledSlider.Track>
              {api.value.map((_, index) => (
                <StyledSlider.Thumb key={index} index={index}>
                  <StyledSlider.HiddenInput />
                </StyledSlider.Thumb>
              ))}
            </StyledSlider.Control>
            {restProps.marks && (
              <StyledSlider.MarkerGroup>
                {restProps.marks.map((mark) => (
                  <StyledSlider.Marker key={mark.value} value={mark.value}>
                    {mark.label}
                  </StyledSlider.Marker>
                ))}
              </StyledSlider.MarkerGroup>
            )}
          </>
        )}
      </StyledSlider.Context>
    </StyledSlider.Root>
  )
}
