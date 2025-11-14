import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseToggleGroupProps, useToggleGroup } from './use-toggle-group'
import { ToggleGroupProvider } from './use-toggle-group-context'

export const ToggleGroupRootElement = 'div' as const
export type ToggleGroupRootProps = Assigns<
  ComponentProps<typeof ToggleGroupRootElement>,
  UseToggleGroupProps,
  PolymorphicProps
>

export const ToggleGroupRoot = (props: ToggleGroupRootProps) => {
  const { ref, ...restProps } = props
  const [useToggleGroupProps, localProps] = createSplitProps<UseToggleGroupProps>()(restProps, [
    'defaultValue',
    'deselectable',
    'disabled',
    'id',
    'ids',
    'loopFocus',
    'multiple',
    'onValueChange',
    'orientation',
    'rovingFocus',
    'value',
  ])
  const togglegroup = useToggleGroup(useToggleGroupProps)
  const mergedProps = mergeProps(togglegroup.getRootProps(), localProps)

  return (
    <ToggleGroupProvider value={togglegroup}>
      <ark.div {...mergedProps} ref={ref} />
    </ToggleGroupProvider>
  )
}
