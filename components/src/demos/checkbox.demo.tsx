import { Checkbox, type CheckboxProps } from '~/components/checkbox'

export const Demo = (props: CheckboxProps) => {
  return (
    <Checkbox defaultChecked {...props}>
      Label
    </Checkbox>
  )
}
