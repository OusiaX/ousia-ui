import * as StyledSwitch from './switch'

export interface SwitchProps extends StyledSwitch.RootProps {}

export const Switch = (props: SwitchProps) => {
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
