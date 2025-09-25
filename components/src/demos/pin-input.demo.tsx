import { PinInput, type PinInputProps } from "~/components/_composite/pin-input"

export const Demo = (props: PinInputProps) => {
  return (
    <PinInput placeholder="0" onValueComplete={(e) => alert(e.valueAsString)} {...props}>
      Pin Input
    </PinInput>
  )
}
