import { DiamondIcon } from 'lucide-react'
import { Icon, type IconProps } from '~/components/icon'

export const Demo = (props: IconProps) => {
  return (
    <Icon {...props}>
      <DiamondIcon />
    </Icon>
  )
}
