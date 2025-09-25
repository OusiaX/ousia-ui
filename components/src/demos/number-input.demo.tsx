import { NumberInput, type NumberInputProps } from '~/components/number-input'

export const Demo = (props: NumberInputProps) => {
  return (
    <NumberInput defaultValue="3" {...props}>
      Label
    </NumberInput>
  )
}
