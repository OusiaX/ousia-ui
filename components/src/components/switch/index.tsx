import * as StyledSwitch from './switch'
export type { RootProps as SwitchProps } from './switch'

export const Switch = (props: StyledSwitch.RootProps) => {
  const { ref, children, ...rootProps } = props

  return (
    <StyledSwitch.Root ref={ref} {...rootProps}>
      <StyledSwitch.Control>
        <StyledSwitch.Thumb />
      </StyledSwitch.Control>
      {children && <StyledSwitch.Label>{children}</StyledSwitch.Label>}
      <StyledSwitch.HiddenInput />
    </StyledSwitch.Root>
  )
}
