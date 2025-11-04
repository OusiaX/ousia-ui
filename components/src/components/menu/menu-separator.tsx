import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import type { ComponentProps } from 'react'
import { useMenuContext } from './use-menu-context'

export interface MenuSeparatorBaseProps extends PolymorphicProps {}
export interface MenuSeparatorProps extends ComponentProps<'hr'>, MenuSeparatorBaseProps {}

export const MenuSeparator = (props: MenuSeparatorProps) => {
  const { ref, ...restProps } = props
  const menu = useMenuContext()
  const mergedProps = mergeProps(menu.getSeparatorProps(), restProps)

  return <ark.hr {...mergedProps} ref={ref} />
}
